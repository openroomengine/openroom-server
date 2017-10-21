import {
  GraphQLList,
  GraphQLID,
  GraphQLInt,
} from 'graphql'

import RoomType from '../room'

import Room from '../../mongoose/Room.js'

export default {
  type: new GraphQLList(RoomType),
  args: {
    after: {
      type: GraphQLID,
      defaultValue: null, // start from beginning
    },
    count: {
      type: GraphQLInt,
      defaultValue: 10,
    },
  },
  resolve: async (prev, args, ctx) => {
    const {after, count} = args

    // cursor
    const condition = after ? {_id: {$gt: after}} : {}

    // get rooms
    let rooms = await Room
      .find(condition)
      .limit(count)

    // namespace
    rooms = rooms.map(room => ({payload: room}))

    return rooms
  },
}
