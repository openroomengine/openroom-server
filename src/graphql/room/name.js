import {
  GraphQLString,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLString,
  resolve: ({payload: room}, args, ctx) => {
    // access control
    isAuth('readRoomName', ctx)

    return room.name
  },
}
