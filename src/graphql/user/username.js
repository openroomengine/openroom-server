import {
  GraphQLString,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLString,
  description: '[readUserUsername(:own)] [unique] username (parent resolver can ask to bypass authorization on this field)',
  resolve: ({payload: user, afterCreate}, args, ctx) => {
    // access control (bypass auth after createUser mutation, so annonyous users can see the result of their action)
    if (!afterCreate) isAuth('readUserUsername', ctx, user.id)

    return user.username
  },
}
