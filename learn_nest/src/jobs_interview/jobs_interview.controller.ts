import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobsInterviewService } from './jobs_interview.service';
import { CreateJobsInterviewDto } from './job_interview.dto';

@Controller('')
export class JobsInterviewController {
  constructor(private readonly jobsInterviewService: JobsInterviewService) {}

  @Post()
  create(@Body() createJobsInterviewDto: CreateJobsInterviewDto) {
    const addJobInterview = this.jobsInterviewService.create(createJobsInterviewDto);
    return "Add Job Interview"
  }

  @Get()
  findAll() {
    const jobInterviews =  this.jobsInterviewService.findAll();
    return {message: "Get All Jobs Interview", data: jobInterviews}
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const findJobInterview =  this.jobsInterviewService.findOne(+id);
    return {message: "Get Job Interview By Id", data: findJobInterview}
  }


}
