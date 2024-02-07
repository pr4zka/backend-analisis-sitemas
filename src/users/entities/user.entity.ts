import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id?: number;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  age: number;

  @Field()
  userId: number;
}
