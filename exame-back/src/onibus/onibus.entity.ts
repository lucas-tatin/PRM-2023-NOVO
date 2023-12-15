import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Onibus {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({nullable: false, length: 50})
    motorista: string;
  
    @Column({nullable: false, length: 50})
    origem: string;

    @Column({nullable: false, length: 50})
    destino: string;

    @PrimaryGeneratedColumn()
    assentos: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}