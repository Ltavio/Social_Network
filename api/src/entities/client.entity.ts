import { Entity,
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";

import Contact from "./contact.entity";

import { Exclude } from "class-transformer";
import { IsEmail } from "class-validator";

import { v4 as uuid } from "uuid";

@Entity("clients")
export default class Client {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ length: 150})
    name: string;

    @Column({ length: 150, unique: true})
    @IsEmail()
    email: string;

    @Column()
    phone: number;

    @Column({ length: 150 })
    @Exclude()
    password: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "date" })
    readonly createdAt: Date;

    @UpdateDateColumn({ type: "date" })
    readonly updatedAt: Date;

    @OneToMany(() => Contact, contact => contact.client, {
        eager: true
    })
    contacts: Contact[]

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
    }
}