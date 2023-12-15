import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Assento } from "./assento.entity";
import { Onibus } from "src/onibus/onibus.entity";
import { AssentoService } from "./assento.service";
import { AssentoController } from "./assento.controller";
import { OnibusModule } from "src/onibus/onibus.module";

@Module({
    imports: [
      TypeOrmModule.forFeature([Onibus, Assento]),
      OnibusModule
    ],
    providers: [AssentoService],
    controllers: [AssentoController]
  })
export class AssentoModule {}