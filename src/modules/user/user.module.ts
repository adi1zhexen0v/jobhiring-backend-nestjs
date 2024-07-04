import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { UserService } from "./services/user.service";
import { AuthService } from "./services/auth.service";
import { UserController } from "./controllers/user.controller";
import { AuthController } from "./controllers/auth.controller";
import { BcryptService } from "@services/bcrypt/bcrypt.service";
import { MailService } from "@services/mail/mail.service";
import { JwtService } from "@services/jwt/jwt.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService, BcryptService, MailService, JwtService]
})
export class UserModule { }
