import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService : UsersService) {}

    @Get("/")
    findAll(@Query("role") data?:"ADMIN" | "USER") {
        return this.userService.findAll(data)
    }
    @Get(":id")
    findOne(@Param("id" , ParseIntPipe) id : number) {
        return this.userService.findOne(id)
    }
    @Post()
    create(@Body(ValidationPipe) request : CreateUserDto) {
        return this.userService.create(request)
    }

    @Patch(":id")
    pat (@Param("id") id : string , @Body(ValidationPipe) userData : UpdateUserDto) {
        return this.userService.update(Number(id) , userData)
    }
}
