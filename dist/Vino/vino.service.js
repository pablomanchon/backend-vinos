"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VinoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const vino_entity_1 = require("./vino.entity");
let VinoService = class VinoService {
    constructor(vinoRepository) {
        this.vinoRepository = vinoRepository;
    }
    async findAll() {
        return this.vinoRepository.find();
    }
    async findOne(id) {
        const vino = await this.vinoRepository.findOne({
            where: { id },
            relations: ['imagenes'],
        });
        if (!vino) {
            throw new common_1.NotFoundException(`Vino con ID ${id} no encontrado.`);
        }
        return vino;
    }
    async create(vino) {
        return this.vinoRepository.save(vino);
    }
    async createAll(vinos) {
        return this.vinoRepository.save(vinos);
    }
    async update(id, vino) {
        await this.findOne(id);
        return this.vinoRepository.save(vino);
    }
    async remove(id) {
        await this.findOne(id);
        await this.vinoRepository.delete(id);
    }
};
exports.VinoService = VinoService;
exports.VinoService = VinoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vino_entity_1.Vino)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VinoService);
//# sourceMappingURL=vino.service.js.map