import {
  GraphQLString,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLString,
  resolve: (user, args, ctx) => {
    // access control
    isAuth('readUserRole', ctx, user.username)

    return user.role
  },
}
