import assert from 'assert'
import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'

import UserType from '../../user'
import UpdateUserInputType from './updateUserInput'

import User from '../../../mongoose/User.js'

import isAuth from '../../../helpers/isAuth.js'
import camelCase from '../../../helpers/camelCase.js'

export default {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    input: {
      type: new GraphQLNonNull(UpdateUserInputType),
    },
  },
  resolve: async (prev, args, ctx) => {
    // shortcuts
    const {id, input} = args

    // find user
    const user = await User.findById(id)

    // make sure user exists
    assert(user, `User with id "${id}" does not exist.`)

    // update user
    for (const field in input) {
      console.log(camelCase('update', 'user', field), ctx, user.username)
      // access control
      isAuth(camelCase('update', 'user', field), ctx, user.username)

      user[field] = input[field]
    }
    await user.save()

    return 'TODO'
  },
}