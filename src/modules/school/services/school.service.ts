import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { School, SchoolDocument } from "../schemas/school.schema";
import { CreateSchoolDto } from "../dtos/create-school.dto";

@Injectable()
export class SchoolService {
  constructor(
    @InjectModel(School.name)
    private readonly schoolModel: Model<SchoolDocument>
  ) {}

  async createSchool(dto: CreateSchoolDto) {
    const school = new this.schoolModel(dto);
    return await school.save();
  }

  async checkExistenceOfSchool(dto: CreateSchoolDto) {
    const { title } = dto;
    const existingSchool = await this.schoolModel.findOne({ title }).exec();
    if (existingSchool) {
      return existingSchool;
    }

    return await this.createSchool({ title, isVerified: false });
  }
}
