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
exports.VinoController = void 0;
const common_1 = require("@nestjs/common");
const vino_service_1 = require("./vino.service");
const vino_entity_1 = require("./vino.entity");
let VinoController = class VinoController {
    constructor(vinoService) {
        this.vinoService = vinoService;
    }
    findAll() {
        return this.vinoService.findAll();
    }
    findOne(id) {
        return this.vinoService.findOne(id);
    }
    create(vino) {
        return this.vinoService.create(vino);
    }
    createAll(vinos) {
        return this.vinoService.createAll(vinos);
    }
    update(id, vino) {
        return this.vinoService.update(id, vino);
    }
    remove(id) {
        return this.vinoService.remove(id);
    }
};
exports.VinoController = VinoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VinoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VinoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vino_entity_1.Vino]),
    __metadata("design:returntype", Promise)
], VinoController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/createAll'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], VinoController.prototype, "createAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, vino_entity_1.Vino]),
    __metadata("design:returntype", Promise)
], VinoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VinoController.prototype, "remove", null);
exports.VinoController = VinoController = __decorate([
    (0, common_1.Controller)('/vinos'),
    __metadata("design:paramtypes", [vino_service_1.VinoService])
], VinoController);
//# sourceMappingURL=vino.controller.js.map