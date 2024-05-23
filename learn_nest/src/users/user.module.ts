import { Module } from "@nestjs/common";
import UserController from "./users.controller";
import { UserService } from "./userService";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})

export class UserModule {}