import { Controller, Get, Param } from '@nestjs/common';
import { ChatgptService } from './chatgpt.service';

@Controller('chatgpt')
export class ChatgptController {
  constructor(private readonly chatgptService: ChatgptService) {}

  @Get(':prompt')
  async getResponse(@Param('prompt') prompt: string) {
    console.log('prompt', prompt);
    const response = await this.chatgptService.sendMessage(prompt);
    return response;
  }
}