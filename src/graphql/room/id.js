import {
  GraphQLID,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLID,
  resolve: (room, args, ctx) => {
    // access control
    isAuth('readRoomId', ctx)

    return room.id
  },
}
