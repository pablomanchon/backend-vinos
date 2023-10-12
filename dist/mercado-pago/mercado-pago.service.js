"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPagoService = void 0;
const common_1 = require("@nestjs/common");
const mercadopago_1 = require("mercadopago");
let MercadoPagoService = class MercadoPagoService {
    async generate(total) {
        console.log(total);
        if (typeof total !== 'number' || isNaN(total)) {
            throw new Error('El valor del total no es valido');
        }
        const mercadoPagoAccessToken = 'TEST-5314719030793332-101111-87cc8308864624642a3c17318d716d98-1507320437';
        const client = new mercadopago_1.MercadoPagoConfig({
            accessToken: mercadoPagoAccessToken,
        });
        const preference = new mercadopago_1.Preference(client);
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
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
};
exports.MercadoPagoService = MercadoPagoService;
exports.MercadoPagoService = MercadoPagoService = __decorate([
    (0, common_1.Injectable)()
], MercadoPagoService);
//# sourceMappingURL=mercado-pago.service.js.map