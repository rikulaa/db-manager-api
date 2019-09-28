import { Controller, Get, Req, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('')
export class DatabasesController {
    @Get()
    index(@Req() request: Request): string {
        return 'databases';
    }

    @Get(':id')
    show(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} database`;
    }
}
