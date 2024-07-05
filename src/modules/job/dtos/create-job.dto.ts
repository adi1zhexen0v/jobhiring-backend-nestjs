import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsBoolean } from "class-validator";

export class CreateJobDto {
  @ApiProperty({ description: "Name of the job", example: "Software Engineer" })
  @IsString({ message: "The name must be a string." })
  readonly name: string;

  @ApiProperty({ description: "Indicates if the job is verified", example: true, required: false })
  @IsOptional()
  @IsBoolean({ message: "The isVerified field must be a boolean value." })
  readonly isVerified?: boolean;
}
