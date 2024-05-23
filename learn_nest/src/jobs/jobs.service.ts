import { Injectable } from "@nestjs/common";

@Injectable()
export class JobService{
    
    private store = [];
   constructor(){
    console.log("Job Service Instance Created")
   }

   FindAllJobs(){
         return this.store;
    }

   
}