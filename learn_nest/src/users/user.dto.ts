export interface User {
    id: number;
    name: string;
    email: string;
    age:number;

}

export interface UserParams{
    id : number;
    age : number;
}

export interface UserQuery{
    name : string
    email:string
}