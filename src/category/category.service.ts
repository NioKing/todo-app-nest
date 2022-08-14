import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/todo/entities/todo.entity';
import { TodoService } from 'src/todo/todo.service';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
    private todoService: TodoService
  ){}

  create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    const newCategory = this.categoryRepo.create(createCategoryInput)
    return this.categoryRepo.save(newCategory)
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepo.find()
  }

  async findOne(id: number): Promise<Category> {
    return this.categoryRepo.findOneOrFail({where: {id: id}})
  }

  async update(id: number, updateCategoryInput: UpdateCategoryInput): Promise<Category> {
    let category: Category = await this.categoryRepo.findOne({where: {id: id}})
    category.title = updateCategoryInput.title
    return await this.categoryRepo.save(category)
  }

  async remove(id: number): Promise<void> {
    await this.categoryRepo.delete(id)
  }

  async getTodos(): Promise<Todo[]> {
    return this.todoService.findAll()
  }
}
