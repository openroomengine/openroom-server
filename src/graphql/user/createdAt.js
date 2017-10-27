import MomentType from '../Moment.js'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: MomentType,
  description: '[readUserCreatedAt(:own)] timestamp at which user entry was created (parent resolver can ask to bypass authorization on this field)',
  resolve: ({payload: user, afterCreate}, args, ctx) => {
    // access control (bypass auth after createUser mutation, so annonyous users can see the result of their action)
    if (!afterCreate) isAuth('readUserCreatedAt', ctx, user.id)

    return user.createdAt
  },
}
