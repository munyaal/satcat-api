import {
  Controller,
  Get,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesDto } from '../dtos/unidades.dto';
import { PagingDto } from '../dtos';
import { PagingResponse } from '../types';
import { Unidades } from '../schemas/unidades.schema';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly service: UnidadesService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async findAll(@Query() params: PagingDto): Promise<PagingResponse<Unidades>> {
    return this.service.findAll(params);
  }

  @Get(':claveUnidad')
  async findOne(
    @Param('claveUnidad') claveUnidad: string,
  ): Promise<{ message: string; data: UnidadesDto }> {
    const data = await this.service.findOne(claveUnidad);
    return {
      message: `Unidad métrica con ID "${claveUnidad}" encontrada`,
      data,
    };
  }
}
