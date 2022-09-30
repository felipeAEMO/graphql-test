import {ObjectType,Field} from "type-graphql";

@ObjectType()
export class Appointment_Model {
    @Field()
    startsAt: Date;

    @Field()
    endsAt: Date;
}