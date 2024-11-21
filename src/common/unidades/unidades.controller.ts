import { Controller, Get, Param } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesDto } from '../dtos/unidades.dto';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly service: UnidadesService) {}

  @Get()
  async findAll():Promise <{ message: string; data: UnidadesDto[]}> {
    const data = await this.service.findAll();
    return {
      message: 'Unidades métricas encontradas',
      data,
    }
  }
  @Get(':id')
  async findOne(
    @Param('id')id:string,
  ): Promise<{message: string; data: UnidadesDto}>{
    const data = await this.service.findOne(id);
    return {
      message: `Unidad métrica con ID "${id}" encontrada`,
      data,
    }
  }
}
