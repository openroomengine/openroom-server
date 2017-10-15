import assert from 'assert'
import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'

import UserType from '../../user'

import User from '../../../mongoose/User.js'

import isAuth from '../../../helpers/isAuth.js'

export default {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (prev, args, ctx) => {
    // find user
    const user = await User.findById(args.id)

    // make sure user exists
    assert(user, `User with id "${args.id}" does not exist.`)

    // access control
    isAuth('deleteUser', ctx, user.username)

    // delete user
    await user.remove()

    return 'TODO'
  },
}
