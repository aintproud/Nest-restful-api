import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userSerice: UserService){}

    @Get(':id')
    async find(@Param('id') id: string){
        return this.userSerice.findOne(id)
    }
}
