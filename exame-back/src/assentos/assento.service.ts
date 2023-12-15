import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Assento } from "./assento.entity";
import { Repository } from "typeorm";
import { Onibus } from "src/onibus/onibus.entity";
import { OnibusService } from "src/onibus/onibus.service";

@Injectable()
export class AssentoService {
    constructor(
        @InjectRepository(Assento)
        private readonly repository: Repository<Assento>,
        private readonly onibusService: OnibusService
    ) {
        //Cria um ônibus se não existir
        this.populateIfNotExists();
    }

    async populateIfNotExists() {
        const onibus = await this.onibusService.findOne();
        
        if (onibus) {
            const founds = await this.repository.find();

            if (founds.length == 0) {
                console.log('Criando assentos do ônibus no banco de dados...')
                
                for (let i = 0; i < onibus.assentos; i++) {
                    const assento = {
                        numero: i+1,
                        onibus: onibus
                    }
                    
                    await this.repository.save(assento);
                }
            }
        }
    }

    findByOnibus(onibus: Onibus): Promise<Assento[]> {
        return this.repository.find({
            where: {
                onibus: {
                    id: onibus.id
                }
            }
        });
    }    
    save(assento: Assento): Promise<Assento> {
        return this.repository.save(assento);
    }
}