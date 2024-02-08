import { Field, ObjectType } from "@nestjs/graphql";



@ObjectType()
export class AuhtEntity{
    @Field()
    username: string

    @Field()
    password: string

    @Field()
    access_token?: string
}