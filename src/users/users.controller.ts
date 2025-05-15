import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService : UsersService) {}

    @Get("/")
    findAll(@Query("role") data?:"ADMIN" | "USER") {
        return this.userService.findAll(data)
    }
    @Get(":id")
    findOne(@Param("id") id : string) {
        return this.userService.findOne(+id)
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
