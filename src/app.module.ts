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
    host: 'ec2-54-246-185-161.eu-west-1.compute.amazonaws.com',
    port: 5432,
    username: 'zoiktuefaskvho',
    password: '12c813c9f803a6b7d239de8b07806e6f4c4b0ef3303645493392fa34855bb908',
    database: 'da3q1f6ulqt09n',
    entities: ["dist/**/entities/*.entity{.ts,.js}"],
    url: "postgres://zoiktuefaskvho:12c813c9f803a6b7d239de8b07806e6f4c4b0ef3303645493392fa34855bb908@ec2-54-246-185-161.eu-west-1.compute.amazonaws.com:5432/da3q1f6ulqt09n",
    synchronize: true,
    autoLoadEntities: true
  }), CategoryModule, TodoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
