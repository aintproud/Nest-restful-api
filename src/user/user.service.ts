import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto, UpdateStudentDto } from './all-student.dto';
import { Student } from './user.entity';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Student)
        private readonly userRepository: Repository <Student>
    ){}
    
    async findOne(id: string): Promise<Student> {
       return this.userRepository.findOne(id)
    }

    async createOne(studentDto: CreateStudentDto): Promise<Student> {
        return this.userRepository.create(studentDto)
    }

    async removeOne(id: string): Promise<Student> {
        return this.removeOne(id)
    }

    async updateOne(id: string, updateDto: UpdateStudentDto){
        return this.userRepository.update(id, updateDto)
    }




}
