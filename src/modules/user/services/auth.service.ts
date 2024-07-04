import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BcryptService } from "@services/bcrypt/bcrypt.service";
import { MailService } from "@services/mail/mail.service";
import { User, UserDocument } from "../schemas/user.schema";
import { RegisterUserDto } from "../dtos/register-user.dto";
import { generateActivationCode } from "@utils/utils";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly bcryptService: BcryptService,
    private readonly mailService: MailService
  ) {}

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
}
