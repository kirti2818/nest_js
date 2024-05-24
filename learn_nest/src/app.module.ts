import { Module } from '@nestjs/common';
import UserController from './users/users.controller';
import { UserService } from './users/userService';
import { Configu } from './users/config';
import { UserModule } from './users/user.module';
import { JobModule } from './jobs/jobs.module';
import { RouterModule } from '@nestjs/core';
import { JobsInterviewModule } from './jobs_interview/jobs_interview.module';



// cases of use providers 
// when we use class as a dependency its calles standard providers and whatever the thing is using as dependency called providers ;
// if we have a class as dependency and the injection token and provider instance both are of same name then we can give easily like we have class anme userStore then we can write normally [UserStore]
// but if we can use this class by any other name suppose userStore then we will write [{provide : "userStore" , useClass : UserStore  }]
// but if we want we have 2 dependencies and we want when i call userStore dependency or store dependency then it should call UserStore class then we will write [UserStore{provide : Store , useExisting : UserStore}]
// useExisting is used when we want to use the same instance of the class for different dependencies by using different names also
const IS_DEV_MODE = true;

@Module({
  imports: [JobModule,JobsInterviewModule, RouterModule.register([{path:"jobs",module: JobModule, children:[{path:"jobs-interview",module:JobsInterviewModule}]}])],

controllers: [],
  // providers: [UserService, Store, { provide: "DATABASE_NAME", useValue: "MOON_KNIGHT" }, { provide: "MAIL", useValue: ["john@gmail.com", "johny@gmail.com"] }, { provide: Configu, useValue: { url: "http://localhost:3000" } }, {
  //   provide: "EVENT_STORE", useFactory: (mode:string = "dev") => {
  // const event = IS_DEV_MODE ? mode : "PROD"
  //     return event;
  //   },
  //   inject:["MODE"]
  // },{provide:"MODE",useValue:"DEV"}]
})
export class AppModule { }
