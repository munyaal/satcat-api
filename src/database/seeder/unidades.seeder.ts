import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Unidades } from 'src/common/schemas/unidades.schema';
import { Seeder } from 'nestjs-seeder';
import datajson from '../../data/Unidades.json';

@Injectable()
export class UnidadesSeeder implements Seeder {
  constructor(
    @InjectModel(Unidades.name) private readonly unidadesModel: Model<Unidades>,
  ) {}

  async seed(): Promise<any> {
    const preload: Unidades[] = datajson.map((item): Unidades => {
      return new this.unidadesModel({
        claveUnidad: `${item.claveUnidad}`,
        nombre: item.nombre,
        descripcion: item.descripcion,
        nota: item.nota,
        simbolo: `${item.simbolo}`,
      });
    });

    await this.unidadesModel.bulkSave(preload);
  }

  async drop(): Promise<any> {
    return this.unidadesModel.deleteMany({});
  }
}
