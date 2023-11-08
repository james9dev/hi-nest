import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {

    constructor(private readonly appService: AppService){}

    @Get()
    async getHello(): Promise<String> {
        const greeting = await this.appService.getHello()
        return greeting
    }

}
