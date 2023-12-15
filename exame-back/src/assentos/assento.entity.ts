import { Onibus } from "src/onibus/onibus.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Assento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    numero: number;

    @ManyToOne(() => Onibus, {eager: false, nullable: false})
    @JoinColumn({name: 'onibus_id'})
    onibus: Onibus;

    @Column({nullable: true})
    passageiro: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}