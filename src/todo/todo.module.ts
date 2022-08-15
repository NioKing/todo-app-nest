import { forwardRef, Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { CategoryModule } from 'src/category/category.module';

@Module({
  providers: [TodoResolver, TodoService],
  imports: [TypeOrmModule.forFeature([Todo]), forwardRef(() => CategoryModule)],
  exports: [TodoService]
})
export class TodoModule {}
