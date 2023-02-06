import { Entity,
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from "typeorm";

import { IsEmail } from "class-validator";

import Client from "./client.entity";
import { v4 as uuid } from "uuid";

@Entity("contacts")
export default class Contact {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ length: 150})
    name: string;

    @Column({ length: 150, unique: true})
    @IsEmail()
    email: string;

    @Column()
    phone: number;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "date" })
    readonly createdAt: Date;

    @UpdateDateColumn({ type: "date" })
    readonly updatedAt: Date;

    @ManyToOne(() => Client, client => client.contacts)
    client: Client

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
    }
}