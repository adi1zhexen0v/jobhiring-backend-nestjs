import { Controller } from "@nestjs/common";
import { SchoolService } from "./services/school.service";

@Controller("school")
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}
}
