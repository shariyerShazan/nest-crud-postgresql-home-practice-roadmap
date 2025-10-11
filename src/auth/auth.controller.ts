import { AuthService } from './auth.service';
/* eslint-disable prettier/prettier */
import { Controller, Post } from "@nestjs/common";
@Controller("auth")
export class AuthController{
    constructor(private authService: AuthService){}

     @Post("register")
      register(){
       return "register"
    }

    @Post("login")
    login(){
        return "login"
    }
    
}