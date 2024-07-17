import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsUrl,
  IsArray,
  ArrayUnique,
  IsBoolean,
  Matches,
  IsNotEmpty
} from "class-validator";

export class CreateSchoolDto {
  @ApiProperty({ description: "Title of the school", example: "Harvard University" })
  @IsString({ message: "The title must be a string." })
  @IsNotEmpty({ message: "The title should not be empty." })
  readonly title: string;

  @ApiProperty({
    description: "URL of the school's logo",
    example: "https://example.com/logo.png",
    required: false
  })
  @IsString({ message: "The logoUrl must be a string." })
  @IsUrl({}, { message: "The logoUrl must be a valid URL." })
  @IsOptional()
  readonly logoUrl?: string;

  @ApiProperty({
    description: "URL of the school's banner",
    example: "https://example.com/banner.png",
    required: false
  })
  @IsString({ message: "The bannerUrl must be a string." })
  @IsUrl({}, { message: "The bannerUrl must be a valid URL." })
  @IsOptional()
  readonly bannerUrl?: string;

  @ApiProperty({
    description: "Description of the school",
    example: "A prestigious university located in Cambridge, MA.",
    required: false
  })
  @IsString({ message: "The description must be a string." })
  @IsOptional()
  readonly description?: string;

  @ApiProperty({
    description: "URL of the school's website",
    example: "https://example.com",
    required: false
  })
  @IsString({ message: "The websiteUrl must be a string." })
  @IsUrl({}, { message: "The websiteUrl must be a valid URL." })
  @IsOptional()
  readonly websiteUrl?: string;

  @ApiProperty({
    description: "Phone number of the school",
    example: "+1234567890",
    required: false
  })
  @IsString({ message: "The phoneNumber must be a string." })
  @IsOptional()
  readonly phoneNumber?: string;

  @ApiProperty({
    description: "List of specialties offered by the school",
    example: ["Computer Science", "Engineering"],
    required: false
  })
  @IsArray({ message: "The specialties must be an array of strings." })
  @ArrayUnique({ message: "The specialties must contain unique values." })
  @IsOptional()
  readonly specialties?: string[];

  @ApiProperty({ description: "Year the school was founded", example: "1636", required: false })
  @IsString({ message: "The foundedYear must be a string." })
  @Matches(/^\d{4}$/, { message: "The foundedYear must be a 4-digit year." })
  @IsOptional()
  readonly foundedYear?: string;

  @ApiProperty({ description: "Verification status of the school", example: false })
  @IsBoolean({ message: "The isVerified must be a boolean." })
  @IsNotEmpty({ message: "The isVerified should not be empty." })
  readonly isVerified: boolean;
}
