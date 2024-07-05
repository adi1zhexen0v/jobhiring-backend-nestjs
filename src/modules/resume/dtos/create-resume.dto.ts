import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsMongoId, IsOptional } from "class-validator";

export class CreateResumeDto {
  @ApiProperty({
    description: "ID of the user",
    example: "60d0fe4f5311236168a109ca",
    required: false
  })
  @IsOptional()
  @IsMongoId({ message: "The userId must be a valid MongoDB ObjectId." })
  readonly userId?: string;

  @ApiProperty({ description: "Name of the job", example: "Software Engineer" })
  @IsString({ message: "The jobName must be a string." })
  readonly jobName: string;
}
