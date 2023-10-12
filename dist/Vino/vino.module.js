"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VinoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vino_service_1 = require("./vino.service");
const vino_controller_1 = require("./vino.controller");
const vino_entity_1 = require("./vino.entity");
const mercado_pago_module_1 = require("../mercado-pago/mercado-pago.module");
let VinoModule = class VinoModule {
};
exports.VinoModule = VinoModule;
exports.VinoModule = VinoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
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
            typeorm_1.TypeOrmModule.forFeature([vino_entity_1.Vino, vino_service_1.VinoService]),
            mercado_pago_module_1.MercadoPagoModule,
        ],
        providers: [vino_service_1.VinoService],
        controllers: [vino_controller_1.VinoController],
    })
], VinoModule);
//# sourceMappingURL=vino.module.js.map