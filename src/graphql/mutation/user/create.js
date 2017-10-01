import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'

import UserType from '../../user'
import User from '../../../mongoose/User.js'

export default {
  type: UserType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (prev, args, ctx) => {
    // create user
    const user = await new User({
      username: args.name,
      password: args.password,
    }).save()

    console.log(user)

    return 'TODO'
  },
}
