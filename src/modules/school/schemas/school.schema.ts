import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SchoolDocument = HydratedDocument<School>;

@Schema({ collection: "schools", timestamps: true })
export class School {
  @Prop({ type: String, required: true, trim: true })
  title: string;

  @Prop({ type: String, required: false, trim: true })
  logoUrl: string;

  @Prop({ type: String, required: false, trim: true })
  bannerUrl: string;

  @Prop({ type: String, required: false, trim: true })
  description: string;

  @Prop({ type: String, required: false, trim: true })
  websiteUrl: string;

  @Prop({ type: String, required: false, trim: true })
  phoneNumber: string;

  @Prop({ type: [String], required: false, trim: true })
  specialties: string[];

  @Prop({ type: String, required: false, trim: true, match: /^\d{4}$/ })
  foundedYear: string;

  @Prop({ type: Boolean, required: true, default: false })
  isVerified: boolean;
}

export const SchoolSchema = SchemaFactory.createForClass(School);
