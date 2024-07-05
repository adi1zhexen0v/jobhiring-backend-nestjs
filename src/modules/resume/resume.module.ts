import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { JobModule } from "@modules/job/job.module";
import { JwtService } from "@services/jwt/jwt.service";
import { ResumeService } from "./services/resume.service";
import { ResumeController } from "./controllers/resume.controller";
import { Resume, ResumeSchema } from "./schemas/resume.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Resume.name, schema: ResumeSchema }]), JobModule],
  controllers: [ResumeController],
  providers: [ResumeService, JwtService]
})
export class ResumeModule {}
