import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

@Module({
  providers: [TodoResolver, TodoService],
  imports: [TypeOrmModule.forFeature([Todo])]
})
export class TodoModule {}
