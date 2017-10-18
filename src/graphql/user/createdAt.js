import MomentType from '../Moment.js'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: MomentType,
  resolve: ({payload: user}, args, ctx) => {
    // access control
    isAuth('readUserCreatedAt', ctx, user.id)

    return user.createdAt
  },
}
