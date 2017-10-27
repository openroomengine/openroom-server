import {
  GraphQLString,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLString,
  description: '[readUserRole(:own)] label that implies authorization rules (parent resolver can ask to bypass authorization on this field)',
  resolve: ({payload: user, afterCreate}, args, ctx) => {
    // access control (bypass auth after createUser mutation, so annonyous users can see the result of their action)
    if (!afterCreate) isAuth('readUserRole', ctx, user.id)

    return user.role
  },
}
