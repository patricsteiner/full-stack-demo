import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogsModule } from './dogs/dogs.module';
import {Dog} from "./dogs/entities/dog.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'admin',
      password: 'secret',
      // database: 'dogs',
      entities: [Dog],
      synchronize: true,
    }),
    DogsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
