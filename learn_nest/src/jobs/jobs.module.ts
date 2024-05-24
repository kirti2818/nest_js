import { Module } from "@nestjs/common";
import { JobController } from "./jobs.controller";
import { JobService } from "./jobs.service";
import { UserModule } from "src/users/user.module";
// import { JobsInterviewModule } from "src/jobs_interview/jobs_interview.module";
import { JobsInterviewController } from "src/jobs_interview/jobs_interview.controller";
import { JobsInterviewService } from "src/jobs_interview/jobs_interview.service";

@Module({
    imports: [UserModule],
    controllers: [JobController],
    providers: [JobService],
    exports: [JobService]
})

export class JobModule {}