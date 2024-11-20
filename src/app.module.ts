import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration, validationSchema, ConfigKey } from './config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseConfig } from './database/mongoose.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: validationSchema,
    }),
    MongooseModule.forRootAsync(mongooseConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
