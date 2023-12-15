import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Onibus } from "./onibus.entity";
import { Repository } from "typeorm";

@Injectable()
export class OnibusService {
    constructor(
        @InjectRepository(Onibus)
        private readonly repository: Repository<Onibus>,
    ) {
        //Cria um ônibus se não existir
        this.populateIfNotExists();
    }

    async populateIfNotExists() {
        const founds = await this.repository.find();

        if (founds.length == 0) {
            console.log('Criando ônibus no banco de dados...')
            const onibus = {
                motorista: 'Luis da Silva',
                origem: 'Pato Branco',
                destino: 'Curitiba',
                assentos: 40
            }

            await this.repository.save(onibus);
        }
    }

    findById(id: number): Promise<Onibus> {
        return this.repository.findOneBy({ id: id });
    }

    async findOne(): Promise<Onibus> {
        
        const founds = await this.repository.find({
            take: 1,
        })

        return founds[0];
    }
}