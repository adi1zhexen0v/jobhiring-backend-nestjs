import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class ResendActivationCodeDto {
  @ApiProperty({ description: "Email address of the user", example: "adilzhexenoff@gmail.com" })
  @IsEmail({}, { message: "Invalid email address" })
  readonly email: string;
}
