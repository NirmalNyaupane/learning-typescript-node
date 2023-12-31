import { IsArray, IsDateString, IsNotEmpty, IsPhoneNumber, IsString, IsUUID } from "class-validator";

export class ProfileValidator{
    @IsNotEmpty()
    @IsPhoneNumber()
    phone:string

    @IsNotEmpty()
    @IsDateString()
    dateOfBirth:string

    @IsNotEmpty()
    @IsArray()
    skills:string[]

    @IsNotEmpty()
    @IsString()
    about:string
}


export class ProfileParamValidators{
    @IsNotEmpty()
    @IsUUID()
    id:string
}
