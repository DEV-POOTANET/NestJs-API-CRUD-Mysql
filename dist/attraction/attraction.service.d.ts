import { Repository } from 'typeorm';
import { Attraction } from './entities/attraction.entity';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
export declare class AttractionService {
    private attractionRepository;
    constructor(attractionRepository: Repository<Attraction>);
    create(createAttractionDto: CreateAttractionDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Attraction[]>;
    findOne(id: number): Promise<Attraction>;
    update(id: number, updateAttractionDto: UpdateAttractionDto): Promise<Attraction>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
