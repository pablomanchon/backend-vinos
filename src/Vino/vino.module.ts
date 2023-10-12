import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'vinos',
      password: 'mansElguapYZjX6N1vH2no3Y22liCebaEZjchon',
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
    VinoModule,
  ],
  providers: [],
  controllers: [],
})
export class VinoModule {}
