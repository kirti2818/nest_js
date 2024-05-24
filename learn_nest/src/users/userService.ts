import { Injectable } from "@nestjs/common";
import { User } from "./user.dto";

@Injectable()
export class UserService {

    private store:User[] = [];
    constructor(){
        console.log("UserStore Instance Created")
    }
    FindAllUsers() {
        return this.store;
    }

    CreateUser(body: User) {
        this.store.push(body);

    }

    FindUserById(id: number) {
        return this.store.find(user => user.id === id);
    }

}