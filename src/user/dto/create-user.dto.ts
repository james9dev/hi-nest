import { IsDate, IsNotEmpty, MaxDate } from "class-validator"
import { Type } from "class-transformer"

export class CreateUserDto {
    @IsNotEmpty()
    method: string        
    
    @IsNotEmpty()
    providerToken: string

    providerId?: string
    name?: string
    email?: string

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    @MaxDate(require('moment')().subtract(17, 'y').toDate())
    dateOfBirth?: Date
}