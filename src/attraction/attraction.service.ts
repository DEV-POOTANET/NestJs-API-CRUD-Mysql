import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { Attraction } from './entities/attraction.entity';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';

@Injectable()
export class AttractionService {
  constructor(
    @InjectRepository(Attraction)
    private attractionRepository: Repository<Attraction>,
  ){}
  async create(createAttractionDto: CreateAttractionDto) {
    const attraction =await this.attractionRepository.create(createAttractionDto)
    const toCreat = await this.attractionRepository.insert(attraction)
    return toCreat;
  }

  findAll() {
    return this.attractionRepository.find()
  }

  findOne(id: number) {
    return this.attractionRepository.findOneBy({id:id})
  }

  async update(id: number, updateAttractionDto: UpdateAttractionDto) {
    let attraction = await this.attractionRepository.findOneBy({id:id})
    attraction ={
      ...attraction,
      ...updateAttractionDto
    }
    const toUpdate = await this.attractionRepository.save(attraction)
    return toUpdate;
  }

  async remove(id: number) {
    const toDelete = await this.attractionRepository.delete(id)
    return toDelete;
  }
}
