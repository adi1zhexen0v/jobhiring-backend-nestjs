import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@guards/auth.guard";
import { Employee } from "@decorators/roles.decorator";
import { PersonalInfoService } from "../services/personal-info.service";
import { AddPersonalInfoDto } from "../dtos/add-personal-info.dto";

@ApiTags("personal-info")
@Controller("resume/personal-info")
export class PersonalInfoController {
  constructor(private readonly personalInfoService: PersonalInfoService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Employee()
  @Post()
  addPersonalInfoToResume(@Body() dto: AddPersonalInfoDto) {
    return this.personalInfoService.addPersonalInfoToResume(dto);
  }
}
