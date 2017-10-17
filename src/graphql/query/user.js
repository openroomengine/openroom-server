import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'

import UserType from '../user'

import User from '../../mongoose/User.js'

export default {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (prev, args, ctx) => {
    const user = await User.findById(args.id)

    return {payload: user}
  },
}
