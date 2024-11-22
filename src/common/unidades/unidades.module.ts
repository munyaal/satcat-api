import { Module } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesController } from './unidades.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Unidades,UnidadesSchema} from '../schemas/unidades.schema';
import { UnidadesSeeder } from 'src/database/seeder/unidades.seeder';


@Module({
  imports:[
    MongooseModule.forFeature([
      {name: Unidades.name, schema: UnidadesSchema}
    ])
  ],
  controllers: [UnidadesController],
  providers: [UnidadesService, UnidadesSeeder],
})
export class UnidadesModule {}
