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
exports.AttractionService = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/typeorm/dist");
const typeorm_1 = require("typeorm");
const attraction_entity_1 = require("./entities/attraction.entity");
let AttractionService = class AttractionService {
    constructor(attractionRepository) {
        this.attractionRepository = attractionRepository;
    }
    async create(createAttractionDto) {
        const attraction = await this.attractionRepository.create(createAttractionDto);
        const toCreat = await this.attractionRepository.insert(attraction);
        return toCreat;
    }
    findAll() {
        return this.attractionRepository.find();
    }
    findOne(id) {
        return this.attractionRepository.findOneBy({ id: id });
    }
    async update(id, updateAttractionDto) {
        let attraction = await this.attractionRepository.findOneBy({ id: id });
        attraction = {
            ...attraction,
            ...updateAttractionDto
        };
        const toUpdate = await this.attractionRepository.save(attraction);
        return toUpdate;
    }
    async remove(id) {
        const toDelete = await this.attractionRepository.delete(id);
        return toDelete;
    }
};
exports.AttractionService = AttractionService;
exports.AttractionService = AttractionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, dist_1.InjectRepository)(attraction_entity_1.Attraction)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AttractionService);
//# sourceMappingURL=attraction.service.js.map