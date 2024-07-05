import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { JobService } from "./services/job.service";
import { JobController } from "./job.controller";
import { Job, JobSchema } from "./schemas/job.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])],
  controllers: [JobController],
  providers: [JobService],
  exports: [JobService]
})
export class JobModule {}
