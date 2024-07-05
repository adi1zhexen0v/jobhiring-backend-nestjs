import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@services/jwt/jwt.service";
import { ROLES_KEY } from "@decorators/roles.decorator";
import { JwtPayload } from "@utils/types";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler()) || [];
    if (requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException("Token is missing");
    }

    const token = authHeader.replace(/^Bearer\s/, "");
    try {
      const user: JwtPayload = this.jwtService.verifyToken(token);
      request.user = user;
      return requiredRoles.includes(user.role);
    } catch (error) {
      throw new UnauthorizedException("Unauthorized user");
    }
  }
}
