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
    host: 'ec2-52-208-164-5.eu-west-1.compute.amazonaws.com',
    port: 5432,
    username: 'wwfueobicaxqdj',
    password: '64af5aaef68d1fc7969c29559289f8ef4ad5dfc4713c56e6c67b72a0b5831e0b',
    database: 'd57eiil7mtd791',
    entities: ["dist/**/entities/*.entity{.ts,.js}"],
    // url: "postgres://wwfueobicaxqdj:64af5aaef68d1fc7969c29559289f8ef4ad5dfc4713c56e6c67b72a0b5831e0b@ec2-52-208-164-5.eu-west-1.compute.amazonaws.com:5432/d57eiil7mtd791",
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
