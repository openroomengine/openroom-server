import assert from 'assert'
import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'

import RoomType from '../room'

import Room from '../../mongoose/Room.js'

export default {
  type: RoomType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (prev, args, ctx) => {
    // get room
    const room = await Room.findById(args.id)

    // make sure room exists
    assert(room, `Room with id "${args.id}" does not exist.`)

    return {payload: room}
  },
}
