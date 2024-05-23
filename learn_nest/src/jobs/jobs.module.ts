import { Module } from "@nestjs/common";
import { JobController } from "./jobs.controller";
import { JobService } from "./jobs.service";
import { UserModule } from "src/users/user.module";

@Module({
    imports: [UserModule],
    controllers: [JobController],
    providers: [JobService],
    exports: [JobService]
})

export class JobModule {}