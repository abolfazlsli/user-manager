import { IsString , IsEmail , IsStrongPassword , IsBoolean , IsDate , IsNumber, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsNumber()
    @IsNotEmpty()
    id : number;
    @IsString()
    @IsNotEmpty()
    username: string;
    @IsEmail()
    email: string;
    @IsStrongPassword()
    password:string;
    @IsString()
    created_at:string;
    @IsBoolean()
    is_active: boolean;
    @IsString()
    @IsOptional()
    role: string;
}

