import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super({usernameField: 'providerId'})

    }

    async validate(providerId: string, providerToken: string): Promise<any> {
        // Do somethins to check the user is valid
        const user = await this.authService.validateUser(providerId, providerToken)

        // If not, throw an exception
        if (!user) {
            throw new UnauthorizedException()
        }


        // If everything is OK, we want to return information about the User

        // request.user == null

        return user
    }

}