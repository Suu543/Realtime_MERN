const { ApolloServer } = require("apollo-server-express");
const http = require("http");
const express = require('express');
require('dotenv').config();

// Invoke Express
const app = express();

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

// Apply Middleware method to connects ApolloServer to a specific HTTP Framework ie: express
// this express server itself applies for graphql server
apolloServer.applyMiddleware({ app });

// server - Pass this express server to this http server
// const httpServer = http.createServer(app);

// Rest Endpoint
app.get('/rest', (req, res) => {
    return res.json({
        data: 'You hit rest endpoint...'
    });
});

// PORT
app.listen(process.env.PORT, () => {
    console.log(`server is listening on PORT http://localhost:${process.env.PORT}`);
    console.log(`graphql server is listening on PORT http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`);
});