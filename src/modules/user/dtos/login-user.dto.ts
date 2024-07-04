import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class LoginUserDto {
  @ApiProperty({ description: "Email address of the user", example: "adilzhexenoff@gmail.com" })
  @IsEmail({}, { message: "Invalid email address" })
  readonly email: string;

  @ApiProperty({ description: "Password for the user account", example: "Adil123!" })
  @IsNotEmpty({ message: "Password is required" })
  @IsString({ message: "Password must be a string" })
  @IsStrongPassword(
    { minUppercase: 1, minLowercase: 1, minLength: 8, minNumbers: 1, minSymbols: 1 },
    {
      message:
        "Your password should contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 symbol"
    }
  )
  readonly password: string;
}
