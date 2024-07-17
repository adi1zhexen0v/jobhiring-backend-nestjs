import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Resume, ResumeDocument } from "../schemas/resume.schema";
import { AddPersonalInfoDto } from "../dtos/add-personal-info.dto";

@Injectable()
export class PersonalInfoService {
  constructor(
    @InjectModel(Resume.name)
    private readonly resumeModel: Model<ResumeDocument>
  ) {}

  async addPersonalInfoToResume(dto: AddPersonalInfoDto) {
    const { resumeId, ...personalInfo } = dto;
    return await this.resumeModel.findByIdAndUpdate(
      resumeId,
      { personalInfo, stage: 2 },
      { new: true }
    );
  }
}
