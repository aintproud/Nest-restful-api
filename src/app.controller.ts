import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get()
  root() {
    return 'Hello World!';
  }
}