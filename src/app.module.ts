import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { configService } from './config/config.service';
import { Student } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 3000,
    username: 'postgres',
    password: 'password',
    database: 'test',
    entities: [Student],
    synchronize: true
  }), UserModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
