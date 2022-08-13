import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo')
@ObjectType()
export class Todo {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field()
  text: string

  @Column({type: "boolean", default: false})
  @Field()
  isCompleted: boolean

}
