import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users
    */

    @Get("/")
    findAll(@Query("data") data?:string) {
        return {
            apidaat : "all the users recv"
        }
    }
    @Get(":id")
    findOne(@Param("id") id : string) {
        return{
            apidata : "data of one user " + id
        }
    }
    @Post()
    create(@Body() request : object) {
        return request
    }

    @Patch(":id")
    pat (@Param("id") id : string , @Body() userData : {}) {
        return {
            id , 
            ...userData
        }
    }
}
