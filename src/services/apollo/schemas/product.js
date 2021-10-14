const { gql } = require('apollo-server-express');

module.exports = gql`
    type Product {
        id:ID
        name: String
        price: Float
        description: String
    }
    type Query {
        products:[Product]
        product(id:ID!): Product
    }
    type Mutation {
        createProduct(name:String, price: Float, description: String): Product
    }
`