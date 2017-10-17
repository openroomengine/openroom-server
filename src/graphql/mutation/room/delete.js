import assert from 'assert'
import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'

import RoomType from '../../room'

import Room from '../../../mongoose/Room.js'

import isAuth from '../../../helpers/isAuth.js'

export default {
  type: RoomType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (prev, args, ctx) => {
    // access control
    isAuth('deleteRoom', ctx)

    // find room
    let room = await Room.findById(args.id)

    // make sure room exists
    assert(room, `Room with id "${args.id}" does not exist.`)

    // delete room
    room = await room.remove()

    return {payload: room}
  },
}
