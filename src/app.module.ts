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
    host: 'ec2-34-249-161-200.eu-west-1.compute.amazonaws.com',
    port: 5432,
    username: 'cipvvacrmzaeha',
    password: '2326012bc44fb0ad843d08b864903f171402bdf2489cd130e5e233201e87ff56',
    database: 'd5mb8nru1fpo7r',
    entities: ["dist/**/entities/*.entity{.ts,.js}"],
    url: "postgres://cipvvacrmzaeha:2326012bc44fb0ad843d08b864903f171402bdf2489cd130e5e233201e87ff56@ec2-34-249-161-200.eu-west-1.compute.amazonaws.com:5432/d5mb8nru1fpo7r",
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
