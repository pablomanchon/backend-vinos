import { Injectable } from '@nestjs/common';
import { MercadoPagoConfig, Preference } from 'mercadopago';

@Injectable()
export class MercadoPagoService {
  async generate(total: number) {
    console.log(total);
    if (typeof total !== 'number' || isNaN(total)) {
      throw new Error('El valor del total no es valido');
    }
    const mercadoPagoAccessToken =
      'TEST-5314719030793332-101111-87cc8308864624642a3c17318d716d98-1507320437';

    const client = new MercadoPagoConfig({
      accessToken: mercadoPagoAccessToken,
    });
    const preference = new Preference(client);
    const items = [
      {
        id: '1234',
        title: 'Compra en onWines',
        quantity: 1,
        currency_id: 'ARS',
        unit_price: total,
      },
    ];
    try {
      const result = await preference.create({ body: { items } });
      return result.id;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
