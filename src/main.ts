import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const server = express();
  const app: INestApplication = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server),
  );

  await app.listen(3000);
}

bootstrap();
