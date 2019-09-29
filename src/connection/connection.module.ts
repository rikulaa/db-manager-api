import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConnectionController } from './connection.controller';
import { ConnectionService } from './connection.service';
import { Connection } from './connection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Connection])],
  controllers: [ConnectionController],
    providers: [ConnectionService],
})
export class ConnectionModule {}
