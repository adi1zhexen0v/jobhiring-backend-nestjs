import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type ExperienceDocument = HydratedDocument<Experience>;

@Schema({ _id: false })
export class Experience {
  @Prop({ type: Types.ObjectId, required: true, ref: "Workplace" })
  workplace: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true, ref: "Job" })
  position: Types.ObjectId;

  @Prop({ type: String, required: true, trim: true })
  description: string;

  @Prop({ type: Date, required: true })
  startDate: Date;

  @Prop({ type: Date, required: false })
  endDate: Date;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
