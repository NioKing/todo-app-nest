import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/entities/category.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {

  constructor(
    @InjectRepository(Todo) private todoRepo: Repository<Todo>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
    @Inject(forwardRef(() => CategoryService)) private categoryService: CategoryService
  ){}

  async create(createTodoInput: CreateTodoInput) {
    const categoryByName = await this.categoryRepo.find({where: {title: createTodoInput.categoryName}})
    categoryByName.forEach((category) => {
      const newTodo = this.todoRepo.create({text: createTodoInput.text, categoryId: category.id})
      console.log(category.id)
      console.log(newTodo)
      this.todoRepo.save(newTodo)
    })
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

  // async findByCategoryId(categoryId: number): Promise<Todo[]> {
  //   return this.todoRepo.find({where: {id: categoryId}})
  // }
}
