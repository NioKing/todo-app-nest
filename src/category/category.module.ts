import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { TodoService } from 'src/todo/todo.service';
import { TodoModule } from 'src/todo/todo.module';

@Module({
  providers: [CategoryResolver, CategoryService],
  imports: [TypeOrmModule.forFeature([Category]), TodoModule]
})
export class CategoryModule {}
