import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { student } from './user.entity';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(student)
        private readonly userRepository: Repository <student>
    ){}
    
    async findOne(userID: string){
       
    }
}
