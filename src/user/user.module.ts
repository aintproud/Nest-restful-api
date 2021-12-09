import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student} from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([student])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
