import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>
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

  async update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  async remove(id: number): Promise<void> {
    await this.categoryRepo.delete(id)
  }
}
