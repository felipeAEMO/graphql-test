import {Field} from "type-graphql";

@ObjectType()
export class Customer {
    @Field()
    name: string;

}