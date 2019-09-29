import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Connection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text')
    host: string;

    @Column({nullable: true})
    user: string;

    @Column({type: 'int', nullable: true})
    port: number;

    @Column({nullable: true})
    password: string;

    @Column({nullable: true})
    database: string;
}
