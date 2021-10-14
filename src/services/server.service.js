const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const schema = require('./apollo/schemas/product');
const resolvers = require('./apollo/resolvers');

const serverGraphQl = new ApolloServer({
    typeDefs: schema,
    resolvers
});

const app = express();

serverGraphQl.applyMiddleware({
    app, path: "/graphql"
});

exports.start = () => {
    app.listen('3030', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('app is running on port 3030');
    })
}