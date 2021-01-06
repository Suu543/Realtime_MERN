const { ApolloServer } = require("apollo-server");
require('dotenv').config();

// graphql server
// types query / mutation / subscription
// ! means not null
const typeDefs = `
    type Query {
        totalPosts: Int!
    }
`;

// resolvers
const resolvers = {
    Query: {
        totalPosts: () => 42
    }
};

// graphql server
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

// PORT
apolloServer.listen(process.env.PORT, () => {
    console.log(`graphql server listening on PORT http://localhost:${process.env.PORT}`);
});