import { Injectable } from '@nestjs/common';
import { CreateJobsInterviewDto } from './job_interview.dto';


@Injectable()
export class JobsInterviewService {
  create(createJobsInterviewDto: CreateJobsInterviewDto) {
    return 'This action adds a new jobsInterview';
  }

  findAll() {
    return `This action returns all jobsInterview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobsInterview`;
  }

  update(id: number, updateJobsInterviewDto: CreateJobsInterviewDto) {
    return `This action updates a #${id} jobsInterview`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobsInterview`;
  }
}
