import { Body, Controller, Post } from '@nestjs/common';
import { MercadoPagoService } from './mercado-pago.service';

@Controller('mercado-pago')
export class MercadoPagoController {
  constructor(private readonly mercadoPagoService: MercadoPagoService) {}
  @Post('/crear-preferencia')
  create(@Body() { total }): Promise<any> {
    try {
      return this.mercadoPagoService.generate(total);
    } catch (err) {
      return err;
    }
  }
}
