import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UpdateStudentDto, CreateStudentDto } from './all-student.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userSerice: UserService){}

    @Get(':id')
    async find(@Param('id') id: string){
        return this.userSerice.findOne(id)
    }

    @Post(':id')
    async create(@Body() createStudent: CreateStudentDto){
        return this.userSerice.createOne(createStudent)
    }

    @Delete(':id')
    async remove(@Param('id') id: string){
        return this.userSerice.removeOne(id)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto){
        return this.userSerice.updateOne(id, updateStudentDto)
    }
}
