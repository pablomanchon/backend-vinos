// vino.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VinoService } from './vino.service';
import { VinoController } from './vino.controller';
import { Vino } from './vino.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'vinos',
      entities: ['dist/**/*.entity{.ts,.js}'],
      host: 'localhost',
      logging: true,
      password: 'root',
      port: 3306,
      synchronize: true,
      type: 'mysql',
      username: 'root',
    }),
    TypeOrmModule.forFeature([Vino, VinoService]),
  ],
  providers: [VinoService],
  controllers: [VinoController],
})
export class VinoModule {}
