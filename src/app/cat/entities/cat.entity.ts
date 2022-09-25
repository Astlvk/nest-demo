import { Entity, Column, ObjectIdColumn, ObjectID, BaseEntity } from 'typeorm';

@Entity()
export class Cat extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  sex: string;
}
