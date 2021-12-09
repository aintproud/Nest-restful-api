import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './user.entity';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Student)
        private readonly userRepository: Repository <Student>
    ){}
    
    async findOne(userID: string){
       
    }
}
