import { Body, Controller, Get, HttpException, HttpStatus, Post, Query } from "@nestjs/common";
import { Assento } from "./assento.entity";
import { AssentoService } from "./assento.service";
import { OnibusService } from "src/onibus/onibus.service";

@Controller('assentos')
export class AssentoController {
  constructor(
    private readonly service: AssentoService,
    private readonly onibusService: OnibusService) {}

  @Get()
  async find(@Query() query): Promise<Assento[]> {
    if (!query?.onibus) {
      throw new HttpException('Onibus não informado', HttpStatus.BAD_REQUEST);
    }

    const found = await this.onibusService.findById(query?.topic);

    if (!found) {
        throw new HttpException('Ônibus não encontrado', HttpStatus.NOT_FOUND);
    }

    return this.service.findByOnibus(found);
  }
  @Post()
  reservar(@Body() assento: Assento): Promise<Assento> {
    return this.service.save(assento);
  }
}