import { Module } from '@nestjs/common';
import { VinoModule } from './Vino/vino.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { database, host, password, port, username } from './Config/mysql';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config/dist';
import { MercadoPagoModule } from './mercado-pago/mercado-pago.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: () => ({
        type: 'mysql',
        database: 'vinos',
        username: 'admin',
        password: 'mendozaArgentina',
        host: 'database-1.cs8a1x1miveo.us-east-2.rds.amazonaws.com',
        port: 3006,
        entities: ['dist/**/*.entity{.ts.js}'],
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
      }),
    }),

    VinoModule,
    MercadoPagoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
