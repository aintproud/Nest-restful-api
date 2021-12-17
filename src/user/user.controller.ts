import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStudentDto } from './all-student.dto';
import { UserService } from './user.service';

@Controller('student')
export class UserController {
  constructor(private readonly userSerice: UserService) {}

  @Get(':id')
  async find(@Param('id') id: string) {
    return this.userSerice.findOne(id);
  }

  @Post()
  async create(@Body() createStudent: CreateStudentDto) {
    return this.userSerice.createOne(createStudent);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userSerice.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() createStudentDto: CreateStudentDto,
  ) {
    return this.userSerice.updateOne(id, createStudentDto);
  }
}
