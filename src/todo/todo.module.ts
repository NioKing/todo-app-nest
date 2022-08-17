import { forwardRef, Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { CategoryModule } from 'src/category/category.module';
import { Category } from 'src/category/entities/category.entity';

@Module({
  providers: [TodoResolver, TodoService],
  imports: [TypeOrmModule.forFeature([Todo, Category]), forwardRef(() => CategoryModule)],
  exports: [TodoService]
})
export class TodoModule {}
