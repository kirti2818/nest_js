import { Controller, Get, Post, Patch, Delete, Put, Res, Body ,Param,HttpCode,HttpStatus,Query, Inject} from "@nestjs/common"
import { Response } from "express"
import { UserService } from "./userService";
import { User, UserParams, UserQuery } from "./user.dto";


@Controller('users')
class UserController {

    // constructor(@Inject(UserService) private userService: UserService,@Inject("DATABASE_NAME") private dbname : string,@Inject("MAIL") private mail : string[], private configuration:Configu , @Inject("EVENT_STORE") private eventstore : string){
    //  console.log("Hey Created",this.userService,this.dbname,this.mail,this.configuration,this.eventstore)
    // }

    constructor(@Inject(UserService) private userService: UserService){
        console.log("Hey Created",this.userService)
       }

    @Post("/")
    async addUser(@Body() requestBody: User, @Res() res: Response) {
        console.log(requestBody)
       
        const createUser = await this.userService.CreateUser(requestBody);
        return res.json({ message: "Add User" })
    }

    @Get("/")
    
    async getAllUsers(@Res() res: Response) {
        const findAllUsers = await this.userService.FindAllUsers()
        return res.status(HttpStatus.OK).json({ message: "Get All Users", data: "findAllUsers" })
    }
    @Get("/:id")
    // getUserById(@Param() params:Record<string, any>,  @Res() res:Response){
    //     console.log(params)
    //     return res.json({message:"Get User By Id"})
    // }

    // getUserById(@Param("id") id:number,  @Res() res:Response){
    //     console.log(id)
    //     return res.json({message:"Get User By Id"})
    // }

   async getUserById(@Query() query:UserQuery,@Param() params:UserParams,  @Res() res:Response){
        console.log(params)
        console.log(query)
        const findUser = await this.userService.FindUserById(params.id)
        return res.json({message:"Get User By Id",user:"findUser"})
    }


}

export default UserController;