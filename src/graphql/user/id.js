import {
  GraphQLID,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLID,
  resolve: ({payload: user, afterCreate}, args, ctx) => {
    // access control (bypass auth after createUser mutation, so annonyous users can see the result of their action)
    if (!afterCreate) isAuth('readUserId', ctx, user.id)

    return user.id
  },
}
