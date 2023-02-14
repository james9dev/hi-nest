import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly userService: UserService,
    ) { }

    @Post('register')
    async postRegister (@Body() createUserDto: CreateUserDto) {
        return this.userService.create(
            createUserDto.method,
            createUserDto.providerToken,
            createUserDto.providerId,
            createUserDto.name,
            createUserDto.email,
            createUserDto.dateOfBirth
            )
    }

}
