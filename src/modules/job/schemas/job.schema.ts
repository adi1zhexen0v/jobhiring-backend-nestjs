import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type JobDocument = HydratedDocument<Job>;

@Schema({ collection: "jobs", timestamps: false })
export class Job {
  @Prop({ type: String, required: true, trim: true })
  name: string;

  @Prop({ type: Boolean, required: true, default: false })
  isVerified: boolean;
}

export const JobSchema = SchemaFactory.createForClass(Job);
