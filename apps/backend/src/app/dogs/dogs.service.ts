import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { Dog } from './entities/dog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog) private readonly dogsRepository: Repository<Dog>
  ) {}

  create(createDogDto: CreateDogDto) {
    this.dogsRepository.save(createDogDto);
  }

  findAll() {
    return this.dogsRepository.find();
  }

  findOne(id: string) {
    // Note: finding by one is a bit weird, we need to use _id + a cast instead of just id, see: https://github.com/typeorm/typeorm/issues/3964#issuecomment-1135201508
    return this.dogsRepository.findOneBy({ _id: new ObjectId(id) } as Partial<Dog>);
  }

  update(id: string, updateDogDto: UpdateDogDto) {
    this.dogsRepository.update(id, updateDogDto);
  }

  delete(id: string) {
    this.dogsRepository.delete(id);
  }
}
