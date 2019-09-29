import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


import { Repository, createConnection } from 'typeorm';
import { Connection } from './connection.entity';

import { Connection as ConnectionInterface } from './interfaces/connection.interface';

@Injectable()
export class ConnectionService {
    constructor(
        @InjectRepository(Connection)
        private readonly connectionRepository: Repository<Connection>,
    ) {}

    async create(connection: ConnectionInterface): Promise<any> {
        const c = new Connection();
        c.type = connection.type;
        c.database = connection.database;
        c.host = connection.host;
        c.port = connection.port;
        c.user = connection.user;
        c.password = connection.password;
        c.name = connection.name;
        return await this.connectionRepository.save(c);
    }

    async getSingle(id: number): Promise<Connection> {
        return await this.connectionRepository.findOne(id);
    }

    async deleteSingle(id: number): Promise<any> {
        const c = await this.getSingle(id);
        await this.connectionRepository.remove(c);

        return;
    }

    async updateSingle(id: number, connection: ConnectionInterface) {
        let c = await this.getSingle(id);
        c.type = connection.type;
        c.database = connection.database;
        c.host = connection.host;
        c.port = connection.port;
        c.user = connection.user;
        c.password = connection.password;
        c.name = connection.name;
        console.log(c, 'c');
        await this.connectionRepository.save(c);
        return;
    }

    async getAll(): Promise<Connection[]> {
        return await this.connectionRepository.find();
    }

    async activate(connection: Connection) {
        const activeConnection = createConnection();
    }
    async deactivate(connection: Connection) {

    }
}
