import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { PersonalInfo, PersonalInfoSchema } from "./personal-info.schema";
import { Education, EducationSchema } from "./education.schema";
import { Experience, ExperienceSchema } from "./experience.schema";

export type ResumeDocument = HydratedDocument<Resume>;

@Schema({ collection: "resumes", timestamps: true })
export class Resume {
  @Prop({ type: Types.ObjectId, required: true, ref: "User" })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true, ref: "Job" })
  desiredJob: Types.ObjectId;

  @Prop({ type: PersonalInfoSchema, required: false })
  personalInfo: PersonalInfo;

  @Prop({ type: [EducationSchema], required: false })
  education: Education[];

  @Prop({ type: [ExperienceSchema], required: false })
  experience: Experience[];

  @Prop({ type: Number, required: false, default: 1 })
  stage: number;

  @Prop({ type: Boolean, required: true, default: false })
  isFinished: boolean;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
