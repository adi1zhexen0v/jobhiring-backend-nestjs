import { Controller } from '@nestjs/common';
import { JobService } from './services/job.service';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) { }
}
