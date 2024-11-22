import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration, validationSchema } from './config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseConfig } from './database/mongoose.config';
import { UnidadesModule } from './common/unidades/unidades.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: validationSchema,
    }),
    MongooseModule.forRootAsync(mongooseConfig),
    UnidadesModule,
  ],
})
export class AppModule {}
