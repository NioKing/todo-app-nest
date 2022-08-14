import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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


  @ManyToOne(
    () => Category,
    category => category.todos,
    {onDelete: 'CASCADE'}
  )
  @Field(type => Category)
  category: Category

  @Column()
  @Field(type => Int)
  categoryId: number
}
