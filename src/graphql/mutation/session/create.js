import assert from 'assert'
import scrypt from 'scrypt'
import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'

import createSessionPayloadType from './createSessionPayload'
import User from '../../../mongoose/User.js'

import isAuth from '../../../helpers/isAuth.js'

const authError = 'Username and/or password are incorrect. Please try again.'

export default {
  type: createSessionPayloadType,
  args: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (prev, args, ctx) => {
    // shortcuts
    const {username, password} = args

    // cannot log in when already logged in
    assert(!ctx.session.user, 'You are already logged in.')

    // access control
    isAuth('createSession', ctx)

    // find user
    const user = await User.findOne(
      {username}, // get user with submitted username
      'username password role', // return username, password
    )

    // make sure user exists
    assert(user, authError)

    // verify password
    const verified = await scrypt.verifyKdf(
      user.password, // actual password (buffer)
      password, // submitted password
    )

    // make sure password is correct
    assert(verified, authError)

    // instantiate session
    ctx.session.user = {
      id: user.id,
      username: user.username,
      role: user.role,
    }

    return 'TODO'
  },
}
