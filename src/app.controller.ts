import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Utils } from './utils/dto/utils';
import { UtilResponse } from './utils/dto/util_response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/challenge')
  postChallenge(@Body() UtilDto: Utils): UtilResponse {
    return this.appService.postChallenge(UtilDto);
  }
}
