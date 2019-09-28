import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasesController } from './databases/databases.controller';
import { TablesController } from './tables/tables.controller';
import { DatabasesModule } from './databases/databases.module';
import { TablesModule } from './tables/tables.module';

const routes: Routes = [
  {
    path: '/databases',
    module: DatabasesModule,
    children: [
      {
        path: ':id/tables',
        module: TablesModule,
      },
    ],
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes), // setup the routes,
    DatabasesModule,
    TablesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
