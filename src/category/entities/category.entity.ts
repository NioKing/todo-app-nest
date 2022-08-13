import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Todo } from 'src/todo/entities/todo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity('category')
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field()
  title: string

  @OneToMany(
    () => Todo,
    todo => todo.category
    )
  @Field(type => [Todo], {nullable: true})
    todos: Todo[]
}
