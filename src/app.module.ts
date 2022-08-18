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
    entities: ["dist/**/entities/*.entity{.ts,.js}"],
    url: "postgres://djyaoflwxohpcx:e2faf10b232945c427abd8f7c8e45992b04c77ee037dd043ea32e29061cea276@ec2-34-249-161-200.eu-west-1.compute.amazonaws.com:5432/d1n3emr455igte",
    synchronize: true,
    autoLoadEntities: true,
    ssl: {
      requestCert: true,
      rejectUnauthorized: false
    }
  }), CategoryModule, TodoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
