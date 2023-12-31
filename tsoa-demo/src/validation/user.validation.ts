import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

class UserValidation {
    @IsNotEmpty()
    @IsString()
    fullName:string

    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNotEmpty()
    @IsStrongPassword()
    password:string
}

export default UserValidation;