import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttractionService } from './attraction.service';
import { AttractionController } from './attraction.controller';
import { Attraction } from './entities/attraction.entity';

@Module({
  //เพื่อให้Attraction รองรับการทำงาน TypeOrmModule
  imports: [TypeOrmModule.forFeature([Attraction])],
  controllers: [AttractionController],
  providers: [AttractionService],
})
export class AttractionModule {}
