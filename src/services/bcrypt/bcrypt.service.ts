import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcryptjs";

@Injectable()
export class BcryptService {
  async hashPassword(password: string, saltRounds: number = 10): Promise<string> {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  }

  async isValidPassword(passwordFromRequest: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(passwordFromRequest, hashedPassword);
  }
}
