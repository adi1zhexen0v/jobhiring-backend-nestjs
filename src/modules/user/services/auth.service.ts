import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BcryptService } from "@services/bcrypt/bcrypt.service";
import { User, UserDocument } from "../schemas/user.schema";
import { RegisterUserDto } from "../dtos/register-user.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly bcryptService: BcryptService
  ) {}

  async register(dto: RegisterUserDto) {
    const { email, password } = dto;
    const candidate = await this.userModel.findOne({ email });
    if (candidate) {
      throw new HttpException("E-mail is already taken", HttpStatus.CONFLICT);
    }

    const hashedPassword: string = await this.bcryptService.hashPassword(password);
    const user = await new this.userModel({ ...dto, password: hashedPassword }).save();
    return user;
  }
}
