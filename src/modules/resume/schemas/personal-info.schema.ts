import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Genders } from "@utils/enums";

@Schema()
export class PersonalInfo {
  @Prop({ type: String, required: true, trim: true })
  firstName: string;

  @Prop({ type: String, required: true, trim: true })
  lastName: string;

  @Prop({ type: String, required: false, trim: true })
  patronymicName: string;

  @Prop({ enum: Genders, required: true, default: Genders.OTHER })
  gender: Genders;

  @Prop({ type: String, required: false, trim: true })
  description: string;

  @Prop({ type: Types.ObjectId, required: true, ref: "City" })
  city: Types.ObjectId;

  @Prop({ type: Date, required: true })
  dateOfBirth: Date;

  @Prop({ type: String, required: true, trim: true })
  phoneNumber: string;

  @Prop({ type: String, required: true, trim: true, match: /.+\@.+\..+/ })
  email: string;

  @Prop({ type: String, required: false, trim: true })
  linkedinUrl: string;

  @Prop({ type: String, required: false, trim: true })
  personalWebsiteUrl: string;
}

export const PersonalInfoSchema = SchemaFactory.createForClass(PersonalInfo);
