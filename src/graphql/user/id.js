import {
  GraphQLID,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLID,
  resolve: (user, args, ctx) => {
    // access control
    isAuth('readUserId', ctx, user.username)

    return user.id
  },
}
