import {
  GraphQLID,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLID,
  description: '[readRoomId] [unique] room id',
  resolve: ({payload: room}, args, ctx) => {
    // access control
    isAuth('readRoomId', ctx)

    return room.id
  },
}
