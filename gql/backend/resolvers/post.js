const { gql } = require('apollo-server-express');
const { posts } = require('../temp');

// queries
const totalPosts = () => posts.length;
const allPosts = () => posts;

// mutation
const newPost = (parent, args, context) => {
    const { title, description } = args.input;
    console.log('parent', parent);
    console.log('args', args);
    // We need to generate an id
    // Create a new post object
    const post = {
        id: posts.length + 1,
        title,
        description
    }

    // push new post object to posts array
    posts.push(post);

    return post
}

module.exports = {
    Query: {
        totalPosts,
        allPosts
    },

    Mutation: {
        newPost
    }
};

