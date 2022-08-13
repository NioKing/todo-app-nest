import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {

  constructor(
    @InjectRepository(Todo) private todoRepo: Repository<Todo>
  ){}

  create(createTodoInput: CreateTodoInput): Promise<Todo> {
    const newTodo = this.todoRepo.create(createTodoInput)
    return this.todoRepo.save(newTodo)
  }

  findAll(): Promise<Todo[]> {
    return this.todoRepo.find()
  }

  findOne(id: number): Promise<Todo> {
    return this.todoRepo.findOneOrFail({where: {id: id}})
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.todoRepo.delete(id)
  }
}
