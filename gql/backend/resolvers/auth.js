const { gql } = require('apollo-server-express');

const me = () => "Yongsu";

module.exports = {
    Query: {
        me
    }
};
