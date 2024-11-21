import { Module } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesController } from './unidades.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Unidades,UnidadesSchema} from '../schemas/unidades.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: Unidades.name, schema: UnidadesSchema}
    ])
  ],
  controllers: [UnidadesController],
  providers: [UnidadesService],
})
export class UnidadesModule {}
