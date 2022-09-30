import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from 'node:crypto';
const typeDefs = gql`
    type Users {
        id: String! 
        name: String!
    }

    type Query {
        users: [Users!]!
    }
    type Mutation {
        createUser(name: String): Users!
    }
`

interface Users {
    name: String
    id: String
}

const users: Users[] = [];

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            users: () => {
                return users
            }
        },

        Mutation: {
            createUser: (_, args) => {
                const user = {
                    id: randomUUID(),
                    name: args.name,
                }
                users.push(user)
                return user
            }
        },
    },

})

server.listen().then(({ url }) => {
    console.log(`HTTP server running on ${url}`);
}) 