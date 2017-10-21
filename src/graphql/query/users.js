import {
  GraphQLList,
  GraphQLID,
  GraphQLInt,
} from 'graphql'

import UserType from '../user'

import User from '../../mongoose/User.js'

export default {
  type: new GraphQLList(UserType),
  args: {
    after: {
      type: GraphQLID, // null means start from beginning
    },
    count: {
      type: GraphQLInt,
    },
  },
  resolve: async (prev, args, ctx) => {
    const {after, count} = args

    // cursor
    const condition = after ? {_id: {$gt: after}} : {}

    // get rooms
    let users = await User
      .find(condition)
      .limit(count)

    // namespace
    users = users.map(user => ({payload: user}))

    return users
  },
}
