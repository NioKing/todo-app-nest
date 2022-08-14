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

  async create(createTodoInput: CreateTodoInput): Promise<Todo> {
    const newTodo = this.todoRepo.create(createTodoInput)
    return await this.todoRepo.save(newTodo)
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoRepo.find()
  }

  async findOne(id: number): Promise<Todo> {
    return await this.todoRepo.findOneOrFail({where: {id: id}})
  }

  async update(id: number, updateTodoInput: UpdateTodoInput): Promise<Todo> {
    let todo: Todo = await this.todoRepo.findOne({where: {id: id}})
    todo.isCompleted = updateTodoInput.isCompleted
    return await this.todoRepo.save(todo)
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.todoRepo.delete(id)
  }

  async findByCategoryId(categoryId: number): Promise<Todo[]> {
    return this.todoRepo.find({where: {id: categoryId}})
  }
}
