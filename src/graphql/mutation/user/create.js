import {
  GraphQLNonNull,
} from 'graphql'

import settings from '../../../settings.js'

import UserType from '../../user'
import CreateUserInputType from './createUserInput'

import User from '../../../mongoose/User.js'

import isAuth from '../../../helpers/isAuth.js'
import camelCase from '../../../helpers/camelCase.js'

const auth = settings.authorization

export default {
  type: UserType,
  args: { // input type
    input: {
      type: new GraphQLNonNull(CreateUserInputType),
    },
  },
  resolve: async (prev, args, ctx) => {
    // shortcuts
    const {username, password} = args.input
    const role = args.input.role || auth.defaultUserRole

    // access control
    isAuth(camelCase('create', 'user', role), ctx)

    // create user
    const user = await new User({
      username,
      password,
      role,
    }).save()

    return {
      payload: user,
      afterCreate: true,
    }
  },
}
