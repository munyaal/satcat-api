import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigKey } from '../config';

export const mongooseConfig: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    uri: configService.get<string>(ConfigKey.database_url),
    dbName: configService.get<string>(ConfigKey.db_name),
  }),
};
