import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Unidades } from '../schemas/unidades.schema';
import { Model } from 'mongoose';
import { UnidadesDto } from '../dtos/unidades.dto';

@Injectable()
export class UnidadesService {
  constructor(
    @InjectModel(Unidades.name)
    private readonly unidadesModel: Model<Unidades>,
  ) {}

  async findAll(): Promise<UnidadesDto[]> {
    const metrics = await this.unidadesModel.find().exec();
    return metrics.map((metric) => this.mapToDto(metric));
  }

  async findOne(id: string): Promise<UnidadesDto> {
    const metric = await this.unidadesModel.findById(id).exec();
    if (!metric) {
      throw new NotFoundException(
        `Unidad de medida con ID "${id}" no encontrado`,
      );
    }
    return this.mapToDto(metric);
  }

  private mapToDto(metric: Unidades): UnidadesDto {
    return {
      claveUnidad: metric.claveUnidad,
      nombre: metric.nombre,
      descripcion: metric.descripcion,
      nota: metric.nota,
      simbolo: metric.simbolo,
    };
  }
}
