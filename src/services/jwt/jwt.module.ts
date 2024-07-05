import { Module } from "@nestjs/common";
import { JwtModule as NestJwtModule } from "@nestjs/jwt";
import { JwtService } from "./jwt.service";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";

@Module({
  imports: [
    NestJwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: "1d" }
    })
  ],
  providers: [JwtService],
  exports: [JwtService]
})
export class JwtModule {}
