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
    // host: 'ec2-54-194-211-183.eu-west-1.compute.amazonaws.com',
    // port: 5432,
    // username: 'hheabjwjwslctb',
    // password: 'ec3c8e624f6e145471ddbebe477a467002558390c008ef51c5a78648a9ac2563',
    // database: 'd64rqr8nqg1v0l',
    entities: ["dist/**/entities/*.entity{.ts,.js}"],
    url: "postgres://xpkenkxatotpat:c913783728e102cc1f714137a6b19ae83ac3c8923a86e8f0201feb88a8b33803@ec2-34-252-216-149.eu-west-1.compute.amazonaws.com:5432/d2chf9ir6did57",
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
