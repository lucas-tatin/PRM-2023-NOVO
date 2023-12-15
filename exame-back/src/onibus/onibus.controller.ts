import { Controller } from "@nestjs/common";
import { OnibusService } from "./onibus.service";
import { Onibus } from "./onibus.entity";

@Controller('onibus')
export class OnibusController {
  constructor(private readonly service: OnibusService) {}
  findOne(): Promise<Onibus> {
    return this.service.findOne();
  }
}