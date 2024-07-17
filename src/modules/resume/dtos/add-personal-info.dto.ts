import { ApiProperty } from "@nestjs/swagger";
import { Genders } from "@utils/enums";
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsEnum,
  IsEmail,
  IsUrl,
  IsMongoId
} from "class-validator";

export class AddPersonalInfoDto {
  @ApiProperty({
    description: "ID of the resume",
    example: "60d0fe4f5311236168a109ca",
    required: false
  })
  @IsOptional()
  @IsMongoId({ message: "The resumeId must be a valid MongoDB ObjectId." })
  readonly resumeId?: string;

  @ApiProperty({ description: "First name", example: "John" })
  @IsString({ message: "The firstName must be a string." })
  @IsNotEmpty({ message: "The firstName should not be empty." })
  readonly firstName: string;

  @ApiProperty({ description: "Last name", example: "Doe" })
  @IsString({ message: "The lastName must be a string." })
  @IsNotEmpty({ message: "The lastName should not be empty." })
  readonly lastName: string;

  @ApiProperty({ description: "Patronymic name", example: "Alexandrovich", required: false })
  @IsString({ message: "The patronymicName must be a string." })
  @IsOptional()
  readonly patronymicName?: string;

  @ApiProperty({ description: "Gender", enum: Genders, example: Genders.OTHER })
  @IsEnum(Genders, { message: "The gender must be a valid enum value." })
  @IsNotEmpty({ message: "The gender should not be empty." })
  readonly gender: Genders;

  @ApiProperty({
    description: "Description",
    example: "Experienced software engineer",
    required: false
  })
  @IsString({ message: "The description must be a string." })
  @IsOptional()
  readonly description?: string;

  @ApiProperty({ description: "City", example: "New York" })
  @IsString({ message: "The city must be a string." })
  @IsNotEmpty({ message: "The city should not be empty." })
  readonly city: string;

  @ApiProperty({ description: "Date of birth", example: "1990-01-01T00:00:00.000Z" })
  @IsString({ message: "The dateOfBirth must be a valid date." })
  @IsNotEmpty({ message: "The dateOfBirth should not be empty." })
  readonly dateOfBirth: Date;

  @ApiProperty({ description: "Phone number", example: "+1234567890" })
  @IsString({ message: "The phoneNumber must be a valid phone number." })
  @IsNotEmpty({ message: "The phoneNumber should not be empty." })
  readonly phoneNumber: string;

  @ApiProperty({ description: "Email address", example: "john.doe@example.com" })
  @IsEmail({}, { message: "The email must be a valid email address." })
  @IsNotEmpty({ message: "The email should not be empty." })
  readonly email: string;

  @ApiProperty({
    description: "LinkedIn URL",
    example: "https://www.linkedin.com/in/johndoe",
    required: false
  })
  @IsUrl({}, { message: "The linkedinUrl must be a valid URL." })
  @IsOptional()
  readonly linkedinUrl?: string;

  @ApiProperty({
    description: "Personal website URL",
    example: "https://www.johndoe.com",
    required: false
  })
  @IsUrl({}, { message: "The personalWebsiteUrl must be a valid URL." })
  @IsOptional()
  readonly personalWebsiteUrl?: string;
}
