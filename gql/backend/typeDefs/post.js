const { gql } = require('apollo-server-express');

module.exports = gql`
    type Post {
        id: ID!
        title: String!
        description: String!
    }

    # input type
    input PostInput {
        title: String!
        description: String!
    }

    type Query {
        totalPosts: Int!
        allPosts: [Post!]!
    }

    # mutations
    type Mutation {
        newPost(input: PostInput!): Post!
    }
`
// 아래 방식은 다소 지저분하다. Input을 이용해서 깔끔하게 만들어보자
// module.exports = gql`
//     type Post {
//         id: ID!
//         title: String!
//         description: String!
//     }

//     type Query {
//         totalPosts: Int!
//         allPosts: [Post!]!
//     }

//     # mutations
//     type Mutation {
//         newPost(title: String!, description: String!): Post!
//     }
// `

