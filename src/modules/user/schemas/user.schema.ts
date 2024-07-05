import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { UserRole } from "@utils/enums";

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: "users", timestamps: true })
export class User {
  @Prop({ type: String, required: true, trim: true })
  firstName: string;

  @Prop({ type: String, required: true, trim: true })
  lastName: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    match: /.+\@.+\..+/
  })
  email: string;

  @Prop({ type: String, required: false, trim: true })
  phoneNumber: string;

  @Prop({ type: String, required: true, trim: true })
  password: string;

  @Prop({ required: true, enum: UserRole, default: UserRole.EMPLOYEE })
  role: UserRole;

  @Prop({ type: String, required: false, trim: true })
  profilePictureUrl: string;

  @Prop({ type: Number, required: true, default: 0 })
  points: number;

  @Prop({ type: Boolean, required: true, default: false })
  isActivated: boolean;

  @Prop({
    type: {
      code: { type: String, match: /^\d{6}$/ },
      expiresIn: { type: Date }
    },
    _id: false,
    required: false
  })
  activationCode?: {
    code: string;
    expiresIn: Date;
  };

  @Prop({ type: [Types.ObjectId], required: false, ref: "Resume" })
  desiredJob: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
