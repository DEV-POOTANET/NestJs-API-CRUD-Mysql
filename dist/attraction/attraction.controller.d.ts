import { AttractionService } from './attraction.service';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
export declare class AttractionController {
    private readonly attractionService;
    constructor(attractionService: AttractionService);
    create(createAttractionDto: CreateAttractionDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<import("./entities/attraction.entity").Attraction[]>;
    findOne(id: string): Promise<import("./entities/attraction.entity").Attraction>;
    update(id: string, updateAttractionDto: UpdateAttractionDto): Promise<import("./entities/attraction.entity").Attraction>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
