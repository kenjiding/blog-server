import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Logger } from '@nestjs/common';

@Controller()
export class AppController {
  private readonly loggerService = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.loggerService.fatal('Hello from loggerService');
    this.loggerService.debug('Hello from loggerService');
    this.loggerService.verbose('Hello from loggerService');
    this.loggerService.warn('Hello from loggerService');
    return this.appService.getHello();
  }
}
