import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    playground: true,
    introspection: true
  }),TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '13891666',
    database: 'todoApp',
    entities: ["dist/**/entities/*.entity{.ts,.js}"],
    synchronize: true,
    autoLoadEntities: true
  }), CategoryModule, TodoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
