import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../schemas/user.schema";
import { BcryptService } from "@services/bcrypt/bcrypt.service";
import { MailService } from "@services/mail/mail.service";
import { JwtService } from "@services/jwt/jwt.service";
import { generateActivationCode } from "@utils/utils";
import { JwtPayload } from "@utils/types";
import { RegisterUserDto, LoginUserDto, ActivateAccountDto, ResendActivationCodeDto } from "../dtos";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly bcryptService: BcryptService,
    private readonly mailService: MailService,
    private readonly jwtService: JwtService
  ) { }

  async register(dto: RegisterUserDto) {
    const { email, password } = dto;
    const candidate = await this.userModel.findOne({ email });
    if (candidate) {
      throw new HttpException("E-mail is already taken", HttpStatus.CONFLICT);
    }

    const hashedPassword: string = await this.bcryptService.hashPassword(password);
    const activationCode = generateActivationCode();
    await this.mailService.sendActivationCode(
      email,
      `${dto.firstName} ${dto.lastName}`,
      activationCode.code
    );
    const user = await new this.userModel({
      ...dto,
      password: hashedPassword,
      activationCode
    }).save();
    return user;
  }

  async login(dto: LoginUserDto) {
    const { email, password } = dto;
    const user = await this.userModel.findOne({ email });

    const passwordIsValid = await this.bcryptService.isValidPassword(password, user.password);
    if (!user || !passwordIsValid) {
      throw new HttpException("Email or password incorrect", HttpStatus.UNAUTHORIZED);
    }

    const payload: JwtPayload = { id: user._id.toString(), role: user.role };
    const token: string = await this.jwtService.createToken(payload);
    return { user, token };
  }

  async resendActivationCode(dto: ResendActivationCodeDto) {
    const { email } = dto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }

    const activationCode = generateActivationCode();
    await this.mailService.sendActivationCode(
      email,
      `${user.firstName} ${user.lastName}`,
      activationCode.code
    );

    await this.userModel.findOneAndUpdate({ email }, { $set: { activationCode } });
    return { message: 'Activation code resent successfully' };
  }

  async activateAccount(dto: ActivateAccountDto) {
    const { email, activationCode } = dto;

    const candidate = await this.userModel.findOne({ email });
    if (!candidate) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }

    if (candidate.activationCode?.code !== activationCode) {
      throw new HttpException("Invalid activation code", HttpStatus.BAD_REQUEST);
    }

    if (candidate.activationCode.expiresIn < new Date()) {
      await this.resendActivationCode({ email });
      throw new HttpException("Activation code expired, new code sent", HttpStatus.BAD_REQUEST);
    }

    const user = await this.userModel.findOneAndUpdate({ email }, { $set: { isActivated: true }, $unset: { activationCode: 1 } }, { new: true });
    return user;
  }
}
