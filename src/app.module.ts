import { Module } from '@nestjs/common';
import { VinoModule } from './Vino/vino.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { database, host, password, port, username } from './Config/mysql';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config/dist';
import { MercadoPagoController } from './mercado-pago/mercado-pago.controller';
import { MercadoPagoModule } from './mercado-pago/mercado-pago.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        database: process.env.DATABASE,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        port: parseInt(3000),
        entities: ['dist/**/*.entity{.ts.js}'],
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
        logger: 'file',
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    VinoModule,
    MercadoPagoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
