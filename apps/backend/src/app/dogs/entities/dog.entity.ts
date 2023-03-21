import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class Dog {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  name: string;
  @Column()
  breed: string;
  @Column()
  imageUrl: string;
}
