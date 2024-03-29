import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
   username: string;
   
   @Field()
   password: string;

  @Field()
  name: string;

  @Field()
  apellido: string;

  @Field()
  email: string;

  @Field()
  age: number;

}
