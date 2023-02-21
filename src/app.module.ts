import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlingModule } from './crawling/crawling.module';
import { ChatgptController } from './chatgpt/chatgpt.controller';
import { ChatgptService } from './chatgpt/chatgpt.service';
import { ChatgptModule } from './chatgpt/chatgpt.module';

@Module({
  imports: [CrawlingModule, ChatgptModule],
  controllers: [AppController, ChatgptController],
  providers: [AppService, ChatgptService],
})
export class AppModule {}
