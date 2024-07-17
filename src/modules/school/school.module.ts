import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SchoolService } from "./services/school.service";
import { SchoolController } from "./school.controller";
import { School, SchoolSchema } from "./schemas/school.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: School.name, schema: SchoolSchema }])],
  controllers: [SchoolController],
  providers: [SchoolService],
  exports: [SchoolService]
})
export class SchoolModule {}
