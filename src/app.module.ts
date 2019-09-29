import {
  Module,
  MiddlewareConsumer,
  RequestMethod,
  NestModule,
} from '@nestjs/common';

// For typeorm
import 'reflect-metadata';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import { ConnectionModule } from './connection/connection.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConnectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
