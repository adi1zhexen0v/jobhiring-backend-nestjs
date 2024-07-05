import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { JwtPayload } from "@utils/types";

export const GetUser = createParamDecorator<unknown, ExecutionContext, JwtPayload>(
  (_, ctx: ExecutionContext): JwtPayload => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
