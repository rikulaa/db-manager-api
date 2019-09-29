import { Controller, Req, Get } from '@nestjs/common';
import { Request } from 'express';

@Controller('')
export class TablesController {
  @Get()
  index(@Req() request: Request): object {
      console.log(request);
      return {};
  }

  @Get(':id')
  show(@Req() request: Request): object {
      console.log(request);
    return {
      columns: [],
    };
  }
}
