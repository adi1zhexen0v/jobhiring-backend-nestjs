import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JobService } from "@modules/job/services/job.service";
import { Resume, ResumeDocument } from "../schemas/resume.schema";
import { CreateResumeDto } from "../dtos/create-resume.dto";

@Injectable()
export class ResumeService {
  constructor(
    @InjectModel(Resume.name)
    private readonly resumeModel: Model<ResumeDocument>,
    private readonly jobService: JobService
  ) {}

  async createResume(dto: CreateResumeDto) {
    const desiredJob = await this.jobService.checkExistenceOfJob({ name: dto.jobName });
    const resume = await new this.resumeModel({ ...dto, desiredJob: desiredJob._id }).save();
    return resume;
  }
}
