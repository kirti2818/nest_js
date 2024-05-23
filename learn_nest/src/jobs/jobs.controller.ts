import { Controller, Get, Inject, Res } from "@nestjs/common";
import { Response } from "express";
import { JobService } from "./jobs.service";
import { UserService } from "src/users/userService";

@Controller('jobs')
export class JobController{
     constructor(@Inject(JobService) private jobService:JobService,@Inject(UserService) private userService:UserService){
        console.log("This is Job Controller")
        console.log(this.jobService)
        console.log(this.userService)
     }

     @Get("/")
     getAllJobs(@Res() res:Response){
     return res.json({message:"Get All Jobs"})
     }
}