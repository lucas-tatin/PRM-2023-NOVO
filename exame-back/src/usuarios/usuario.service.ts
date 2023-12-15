import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "./usuario.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly repository: Repository<Usuario>,
    ) {
        this.populateIfNotExists();
    }

    async populateIfNotExists() {
        const founds = await this.repository.find();

        if (founds.length == 0) {
            console.log('Criando usuario no banco de dados...')
            const usuario = {
                fullname: 'Fulano de Tal'
            }

            await this.repository.save(usuario);
        }
    }

    findOne(): Promise<Usuario> {
        const founds = this.repository.find({
            take: 1,
        })

        return founds[0];
    }
}