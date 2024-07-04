import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ActivateAccountDto {
  @ApiProperty({ description: "Email address of the user", example: "adilzhexenoff@gmail.com" })
  @IsEmail({}, { message: "Invalid email address" })
  readonly email: string;

  @ApiProperty({ description: "Activation code for the user account", example: "123456" })
  @IsNotEmpty({ message: "Activation code is required" })
  @IsString({ message: "Activation code must be a string" })
  readonly activationCode: string;
}
