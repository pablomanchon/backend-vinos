import { Module } from '@nestjs/common';
import { VinoModule } from './Vino/vino.module';
import { MercadoPagoModule } from './mercado-pago/mercado-pago.module';

@Module({
  imports: [VinoModule, MercadoPagoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
