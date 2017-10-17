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
    const room = await Room.findById(args.id)

    return {payload: room}
  },
}
