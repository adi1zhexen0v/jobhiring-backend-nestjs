import { SetMetadata } from "@nestjs/common";
import { UserRole } from "@utils/enums";

export const ROLES_KEY = "roles";
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

export const Employee = () => Roles(UserRole.EMPLOYEE);
export const Manager = () => Roles(UserRole.MANAGER);
export const Owner = () => Roles(UserRole.OWNER);
export const Admin = () => Roles(UserRole.ADMIN);
