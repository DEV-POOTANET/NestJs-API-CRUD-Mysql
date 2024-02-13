"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAttractionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_attraction_dto_1 = require("./create-attraction.dto");
class UpdateAttractionDto extends (0, mapped_types_1.PartialType)(create_attraction_dto_1.CreateAttractionDto) {
}
exports.UpdateAttractionDto = UpdateAttractionDto;
//# sourceMappingURL=update-attraction.dto.js.map