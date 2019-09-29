import {
  Controller,
  Get,
  Req,
  Param,
  Post,
  Put,
  Body,
  UsePipes,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
import { ConnectionService } from './connection.service';

import { Create } from './dto';

@Controller('connections')
export class ConnectionController {
  // Inject the service to the controller
  constructor(private readonly connectionsService: ConnectionService) {}

  @Get()
  async index(@Req() request: Request): Promise<any[]> {
    return this.connectionsService.getAll();
  }

  // Get single connection
  @Get(':connectionId')
  async show(@Param('connectionId') id : number): Promise<any> {
    return this.connectionsService.getSingle(id);
  }
  // Delete single connection
  @Delete(':connectionId')
  async delete(@Param('connectionId') id : number): Promise<any> {
    return await this.connectionsService.deleteSingle(id);
  }

  // Update single connection
  @Put(':connectionId')
  @UsePipes(new ValidationPipe({ transform: true}))
  async update(@Param('connectionId') id : number, @Body() updateConnectionDTO : Create) {
    return await this.connectionsService.updateSingle(id, updateConnectionDTO);
  }

  // Create new connection
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createConnectionDTO: Create): Promise<any> {
    const connection = await this.connectionsService.create(createConnectionDTO);
    return connection;
  }

  @Get(':connectionId/tables')
  async showTables(@Param('connectionId') id : number): Promise<any> {
    return await this.connectionsService.getSingle(id);
  }
}
