import { Args,Mutation,Query,Resolver } from "type-graphql";
import {ApolloServer} from "apollo-server";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment_Model } from "../dtos/models/appointment-model";
import { Customer } from "../dtos/models/customer-model";

@Resolver()


export class AppointmentsResolver {
   
    @Query(() => String)
   
    async appointments() {
       
        return [{
            startsAt: new Date(),
            endsAt: new Date(),
        }];

    }
    @Mutation(() => Appointment_Model)
    async createAppointment(@Arg('data') data: CreateAppointmentInput) {
      
        const appointment = {
            startsAt: data.startsAt,
            endsAt: data.endsAt,
        }
        return appointment;
    }
    @FieldResolver(() => Customer)
    async customer(@Root() appointments: Appointment_Model) {
        console.log(appointments.startsAt)

        return {
            name: 'Felipe King '
        }

    }
}