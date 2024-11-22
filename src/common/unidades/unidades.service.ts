import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Unidades } from '../schemas/unidades.schema';
import { Model } from 'mongoose';
import { UnidadesDto } from '../dtos/unidades.dto';
import { PagingDto } from '../dtos';
import { PagingResponse } from '../types';

@Injectable()
export class UnidadesService {
  constructor(
    @InjectModel(Unidades.name)
    private readonly unidadesModel: Model<Unidades>,
  ) {}

  async findAll(params: PagingDto): Promise<PagingResponse<Unidades>> {
    const { limit = 10, page = 1 } = params;

    const skip = (page - 1) * limit;

    const [{ data, total }] = await this.unidadesModel
      .aggregate([
        {
          $facet: {
            data: [{ $skip: skip }, { $limit: limit }],
            total: [{ $count: 'count' }],
          },
        },
      ])
      .exec();

    const records = total.length > 0 ? total[0].count : 0;

    const totalPage = Math.ceil(records / limit);

    return {
      page,
      limit,
      records,
      totalPage,
      data,
    };
  }

  async findOne(claveUnidad: string): Promise<UnidadesDto> {
    const metric = await this.unidadesModel.findOne({ claveUnidad }).exec();
    if (!metric) {
      throw new NotFoundException(
        `Unidad de medida con Clave Unidad "${claveUnidad}" no encontrado`,
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
