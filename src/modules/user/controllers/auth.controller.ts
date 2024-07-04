import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "../services/auth.service";
import { RegisterUserDto, LoginUserDto, ActivateAccountDto, ResendActivationCodeDto } from "../dtos";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("/register")
  @HttpCode(201)
  register(@Body() dto: RegisterUserDto) {
    return this.authService.register(dto);
  }

  @Post("/login")
  @HttpCode(200)
  login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto);
  }


  @Post("/activate")
  @HttpCode(200)
  activateAccount(@Body() dto: ActivateAccountDto) {
    return this.authService.activateAccount(dto);
  }

  @Post("/resend")
  @HttpCode(200)
  resendActivationCode(@Body() dto: ResendActivationCodeDto) {
    return this.authService.resendActivationCode(dto);
  }
}
