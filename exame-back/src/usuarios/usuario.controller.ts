import { Controller, Get } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";

@Controller('usuarios')
export class UsuarioController { 
  constructor(private readonly service: UsuarioService) {}
  @Get()
    findOne(): Promise<Usuario> {
        return this.service.findOne();

  //TO-DO: Implementar o método para retornar o usuário, chamando o findOne da service

}
}