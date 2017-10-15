import {
  GraphQLString,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLString,
  resolve: (prev, args, ctx) => {
    // access control
    isAuth('readRoomDescription', ctx)

    return 'TODO'
  },
}
