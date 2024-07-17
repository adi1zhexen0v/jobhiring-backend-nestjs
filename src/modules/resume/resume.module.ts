import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { JobModule } from "@modules/job/job.module";
import { SchoolModule } from "@modules/school/school.module";
import { JwtService } from "@services/jwt/jwt.service";
import { ResumeService } from "./services/resume.service";
import { ResumeController } from "./controllers/resume.controller";
import { PersonalInfoService } from "./services/personal-info.service";
import { PersonalInfoController } from "./controllers/personal-info.controller";
import { Resume, ResumeSchema } from "./schemas/resume.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Resume.name, schema: ResumeSchema }]),
    JobModule,
    SchoolModule
  ],
  controllers: [ResumeController, PersonalInfoController],
  providers: [ResumeService, PersonalInfoService, JwtService]
})
export class ResumeModule {}
