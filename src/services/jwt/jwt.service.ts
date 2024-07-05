import { Injectable } from "@nestjs/common";
import { JwtService as NestJwtService } from "@nestjs/jwt";
import { JwtPayload } from "@utils/types";

@Injectable()
export class JwtService {
  constructor(private readonly jwtService: NestJwtService) {}

  createToken(payload: any): string {
    return this.jwtService.sign(payload);
  }

  verifyToken(token: string): JwtPayload {
    try {
      return this.jwtService.verify<JwtPayload>(token);
    } catch (error) {
      throw new Error("Invalid token");
    }
  }
}
