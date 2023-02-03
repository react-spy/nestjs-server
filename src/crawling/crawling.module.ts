import { Module } from '@nestjs/common';
import { CrawlingService } from './crawling.service';
import { CrawlingController } from './crawling.controller';
import { AppService } from '../app.service';

@Module({
  // 控制器里如果要使用某个XxService,要么在providers导入该Servce;或者imports相关Module(该Module已经exports)
  providers: [CrawlingService, AppService],
  controllers: [CrawlingController],
  //   exports: [CrawlingService],
})
export class CrawlingModule {}
