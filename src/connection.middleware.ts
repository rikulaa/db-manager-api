import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConnectionService } from './connection/connection.service';

@Injectable()
export class ConnectionMiddleware implements NestMiddleware {
  // Inject the service to the controller
  constructor(private readonly connectionsService: ConnectionService) {}
  use(req: any, res: any, next: () => void) {

    const currentConnection = this.connectionsService.getSingle(req.params.id);
    console.log('Request...', req.params.id);
    req.headers.connection = currentConnection;
    next();
  }
}
