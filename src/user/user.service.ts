import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateStudentDto } from './all-student.dto';
import { Student } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Student)
    private readonly userRepository: Repository<Student>,
  ) {}

  async findOne(id: string): Promise<Student> {
    return this.userRepository.findOne(id);
  }

  async createOne(studentDto: CreateStudentDto): Promise<Student> {
    const newUser = this.userRepository.create(studentDto);

    return this.userRepository.save(newUser);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.userRepository.delete({ id: id });
  }

  async updateOne(id: string, updateDto: CreateStudentDto): Promise<Student> {
    const user = await this.userRepository.preload({
      id: id,
      ...updateDto,
    });

    return this.userRepository.save(user);
  }
}
