import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { EducationDegrees } from "@utils/enums";

export type EducationDocument = HydratedDocument<Education>;

@Schema()
export class Education {
  @Prop({ type: Types.ObjectId, required: true, ref: "School" })
  school: Types.ObjectId;

  @Prop({ enum: EducationDegrees, required: true, default: EducationDegrees.BACHELOR })
  degree: EducationDegrees;

  @Prop({ type: String, required: true, trim: true })
  faculty: string;

  @Prop({ type: String, required: false, trim: true })
  specialization: string;

  @Prop({ type: String, required: true, trim: true, match: /^\d{4}$/ })
  startDate: string;

  @Prop({ type: String, required: true, trim: true, match: /^\d{4}$/ })
  endDate: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
