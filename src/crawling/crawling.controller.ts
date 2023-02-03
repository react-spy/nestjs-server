import { Controller, Get } from '@nestjs/common';
import { CrawlingService } from './crawling.service';
import { AppService } from '../app.service';

@Controller('crawling')
export class CrawlingController {
  constructor(
    private readonly crawlingService: CrawlingService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getData() {
    return this.crawlingService.getData();
  }

  @Get('/app')
  getAllData() {
    return this.appService.getHello();
  }
}
