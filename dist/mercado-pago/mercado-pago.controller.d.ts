import { MercadoPagoService } from './mercado-pago.service';
export declare class MercadoPagoController {
    private readonly mercadoPagoService;
    constructor(mercadoPagoService: MercadoPagoService);
    create({ total }: {
        total: any;
    }): Promise<any>;
}
