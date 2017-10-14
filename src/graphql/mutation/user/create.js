import {
  GraphQLNonNull,
} from 'graphql'

import UserType from '../../user'
import CreateUserInputType from './createUserInput'

import User from '../../../mongoose/User.js'

import isAuth from '../../../helpers/isAuth.js'

export default {
  type: UserType,
  args: { // input type
    input: {
      type: new GraphQLNonNull(CreateUserInputType),
    },
  },
  resolve: async (prev, args, ctx) => {
    // access control
    isAuth('createUser', ctx)

    // shortcuts
    const {username, password, role} = args.input

    // create user
    const user = await new User({
      username,
      password,
      role,
    }).save()

    console.log(user)

    return 'TODO'
  },
}
