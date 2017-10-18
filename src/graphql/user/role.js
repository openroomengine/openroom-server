import {
  GraphQLString,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLString,
  resolve: ({payload: user, afterCreate}, args, ctx) => {
    // access control (bypass auth after createUser mutation, so annonyous users can see the result of their action)
    if (!afterCreate) isAuth('readUserRole', ctx, user.id)

    return user.role
  },
}
