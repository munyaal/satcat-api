import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesDto } from '../dtos/unidades.dto';
import { UnidadesSeeder } from 'src/database/seeder/unidades.seeder';


@Controller('unidades')
export class UnidadesController {
  constructor(
    private readonly service: UnidadesService,
    private readonly seeder: UnidadesSeeder,
  ) {}

  @Get()
  async findAll(): Promise<{ message: string; data: UnidadesDto[] }> {
    const data = await this.service.findAll();
    return {
      message: 'Unidades métricas encontradas',
      data,
    };
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
  @Delete('drop')
  async dropUnidades(): Promise<{ message: string }> {
    await this.seeder.drop();
    return { message: 'Datos de la colección Unidades eliminados' };
  }
}
