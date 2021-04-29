import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    id: { type: GraphQLString },
    fullname: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: {
        // id: {
        //   type: GraphQLString,
        // },
      },
      resolve(parent, args) {
        return {
          id: '1',
          fullname: 'gleb',
          email: 'test',
          password: '123',
        };
      },
    },
  },
});

export default new GraphQLSchema({
  query: Query,
});
