import { UserRole } from "./enums";

export interface JwtPayload {
  id: string;
  role: UserRole;
}
