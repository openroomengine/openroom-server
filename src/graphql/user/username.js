import {
  GraphQLString,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLString,
  resolve: (user, args, ctx) => {
    // access control
    isAuth('readUserUsername', ctx, user.username)

    return user.username
  },
}
