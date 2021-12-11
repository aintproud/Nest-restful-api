import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UpdateStudentDto, CreateStudentDto } from './all-student.dto';
import { Student } from './user.entity';
import { UserService } from './user.service';

@Controller('student')
export class UserController {
    constructor(private readonly userSerice: UserService){}

    @Get(':id')
    async find(@Param('id') id: string): Promise<UpdateStudentDto>{
        return this.userSerice.findOne(id)
    }

    @Post()
    async create(@Body() createStudent: CreateStudentDto): Promise<Student>{
        return this.userSerice.createOne(createStudent)
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<UpdateStudentDto>{
        return this.userSerice.removeOne(id)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() createStudentDto: CreateStudentDto): Promise<CreateStudentDto>{
        return this.userSerice.updateOne(id, createStudentDto)
    }
}
