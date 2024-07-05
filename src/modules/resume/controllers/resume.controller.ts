import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResumeService } from '../services/resume.service';
import { CreateResumeDto } from '../dtos/create-resume.dto';

@ApiTags("resume")
@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) { }

  @Post()
  @HttpCode(201)
  createResume(@Body() dto: CreateResumeDto) {
    return this.resumeService.createResume(dto);
  }
}
