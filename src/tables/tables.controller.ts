import { Controller, Req, Get } from '@nestjs/common';
import { Request } from 'express';

@Controller('')
export class TablesController {
    @Get()
    index(@Req() request: Request): object {
        return [
            {
                name: 'users',
            },
            {
                name: 'posts',
            },
        ];
    }

    @Get(':id')
    show(@Req() request: Request): object {
        return {
            columns: []
        }
    }
}
