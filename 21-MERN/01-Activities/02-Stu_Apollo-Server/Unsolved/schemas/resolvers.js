const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
// creating functions that fulfill the queries defines in typeDefs.js
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // get and return all docs from the classes collection.
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
