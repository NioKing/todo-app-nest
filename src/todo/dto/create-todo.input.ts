import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  text: string
  @Field()
  categoryName: string
}
