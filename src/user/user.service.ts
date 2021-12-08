import { Injectable } from '@nestjs/common';
import {Ingect}
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: EntityRepository<Article>
    ){}
    
    async findOne(userID: number){
        

        const user = userID ? 
        await 
    }
}
