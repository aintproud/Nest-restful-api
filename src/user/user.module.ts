import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}

