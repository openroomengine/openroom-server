import {
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} from 'graphql'

import User from '../user'

export default {
  type: new GraphQLList(User),
  args: {
    after: {
      type: GraphQLID, // null means start from beginning
    },
    count: {
      type: GraphQLInt,
    },
  },
  resolve: (prev, args, ctx) => ['TODO'],
}
