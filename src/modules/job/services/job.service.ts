import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job, JobDocument } from '../schemas/job.schema';
import { CreateJobDto } from '../dtos/create-job.dto';

@Injectable()
export class JobService {
  constructor(
    @InjectModel(Job.name)
    private readonly jobModel: Model<JobDocument>,
  ) { }

  async createJob(dto: CreateJobDto) {
    const job = new this.jobModel(dto);
    return await job.save();
  }

  async checkExistenceOfJob(dto: CreateJobDto) {
    const { name } = dto;
    const existingJob = await this.jobModel.findOne({ name }).exec();
    if (existingJob) {
      return existingJob;
    }

    return await this.createJob({ name, isVerified: false });
  }
}
