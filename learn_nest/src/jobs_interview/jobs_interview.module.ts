import { Module } from '@nestjs/common';
import { JobsInterviewService } from './jobs_interview.service';
import { JobsInterviewController } from './jobs_interview.controller';

@Module({
  controllers: [JobsInterviewController],
  providers: [JobsInterviewService],
})
export class JobsInterviewModule {}
