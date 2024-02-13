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
exports.AttractionController = void 0;
const common_1 = require("@nestjs/common");
const attraction_service_1 = require("./attraction.service");
const create_attraction_dto_1 = require("./dto/create-attraction.dto");
const update_attraction_dto_1 = require("./dto/update-attraction.dto");
let AttractionController = class AttractionController {
    constructor(attractionService) {
        this.attractionService = attractionService;
    }
    create(createAttractionDto) {
        return this.attractionService.create(createAttractionDto);
    }
    findAll() {
        return this.attractionService.findAll();
    }
    findOne(id) {
        return this.attractionService.findOne(+id);
    }
    update(id, updateAttractionDto) {
        return this.attractionService.update(+id, updateAttractionDto);
    }
    remove(id) {
        return this.attractionService.remove(+id);
    }
};
exports.AttractionController = AttractionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_attraction_dto_1.CreateAttractionDto]),
    __metadata("design:returntype", void 0)
], AttractionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttractionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttractionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_attraction_dto_1.UpdateAttractionDto]),
    __metadata("design:returntype", void 0)
], AttractionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttractionController.prototype, "remove", null);
exports.AttractionController = AttractionController = __decorate([
    (0, common_1.Controller)('attraction'),
    __metadata("design:paramtypes", [attraction_service_1.AttractionService])
], AttractionController);
//# sourceMappingURL=attraction.controller.js.map