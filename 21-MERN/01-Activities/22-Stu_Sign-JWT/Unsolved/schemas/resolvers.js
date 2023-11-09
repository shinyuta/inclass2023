const { User, Thought } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    // TODO: Add comments to each line of code below to describe the functionality below
    addUser: async (parent, args) => {
      // create user
      const user = await User.create(args);
      // pass user into signToken to generate token. (from auth.js)
      const token = signToken(user);
      // return the "Auth" object with token and user from typeDefs auth.
      return { token, user };
    },

    // TODO: Add comments to each line of code below to describe the functionality below
    login: async (parent, { email, password }) => {
      //  finding user by email because every user has a unique email.
      const user = await User.findOne({ email });

      // if user not created (token not signed) then throw the error.
      if (!user) {
        throw AuthenticationError
      }

      // if user is found, from user model, finds password by using isCorrectPassword()
      const correctPw = await user.isCorrectPassword(password);

      // if the password is incorrect throw error.
      if (!correctPw) {
        throw AuthenticationError
      }

      // if the password is correct, sign the token.
      const token = signToken(user);
      // return 'Auth' object with signed token and user.
      return { token, user };
    },

    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor });

      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought;
    },
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
