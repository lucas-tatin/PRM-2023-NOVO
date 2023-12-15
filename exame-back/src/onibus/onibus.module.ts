import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OnibusService } from "./onibus.service";
import { OnibusController } from "./onibus.controller";
import { Onibus } from "./onibus.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Onibus])],
    providers: [OnibusService],
    controllers: [OnibusController],
    exports: [OnibusService]
  })
export class OnibusModule {}