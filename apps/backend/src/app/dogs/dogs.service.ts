import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { Dog } from './entities/dog.entity';

@Injectable()
export class DogsService {
  dogs: Dog[] = [];

  create(createDogDto: CreateDogDto) {
    this.dogs.push({ ...createDogDto, id: Math.random().toString() });
  }

  findAll() {
    return this.dogs;
  }

  findOne(id: string) {
    return this.dogs.filter((d) => d.id === id)[0];
  }

  update(id: string, updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }

  remove(id: string) {
    this.dogs = this.dogs.filter((d) => d.id !== id);
  }
}
