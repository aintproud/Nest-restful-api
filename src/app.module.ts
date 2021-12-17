import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Student } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: [Student],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
