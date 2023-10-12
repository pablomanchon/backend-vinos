import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VinoService } from './vino.service';
import { VinoController } from './vino.controller';
import { Vino } from './vino.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'vinos',
      password: 'sElguapYZjX6N1vH2no3Y22liCebaEZj',
      database: 'vinos_86f8',
      entities: ['dist/**/*.entity{.ts,.js}'],
      host: 'dpg-ckk0iqb6fquc739fger0-a.oregon-postgres.render.com',
      port: 5432,
      synchronize: true,
      logging: true,
      retryDelay: 3000,
      retryAttempts: 10,
      ssl: true,
      extra: {
        ssl: true
          ? {
              rejectUnauthorized: false,
            }
          : null,
      },
    }),
    TypeOrmModule.forFeature([Vino, VinoService]),
  ],
  providers: [VinoService],
  controllers: [VinoController],
})
export class VinoModule {}
