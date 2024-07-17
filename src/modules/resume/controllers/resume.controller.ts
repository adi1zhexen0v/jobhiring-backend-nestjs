import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@guards/auth.guard";
import { GetUser } from "@decorators/get-user.decorator";
import { Employee } from "@decorators/roles.decorator";
import { JwtPayload } from "@utils/types";
import { ResumeService } from "../services/resume.service";
import { CreateResumeDto } from "../dtos/create-resume.dto";

@ApiTags("resume")
@Controller("resume")
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Employee()
  @Post()
  @HttpCode(201)
  createResume(@Body() dto: CreateResumeDto, @GetUser() user: JwtPayload) {
    return this.resumeService.createResume({ ...dto, userId: user.id });
  }
}
