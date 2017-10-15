import assert from 'assert'
import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'

import RoomType from '../../room'
import UpdateRoomInputType from './updateRoomInput'

import Room from '../../../mongoose/Room.js'

import isAuth from '../../../helpers/isAuth.js'
import camelCase from '../../../helpers/camelCase.js'

export default {
  type: RoomType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    input: {
      type: new GraphQLNonNull(UpdateRoomInputType),
    },
  },
  resolve: async (prev, args, ctx) => {
    // shortcuts
    const {id, input} = args

    // find room
    const room = await Room.findById(id)

    // make sure room exists
    assert(room, `Room with id "${id}" does not exist.`)

    // update room
    for (const field in input) {
      console.log(camelCase('update', 'room', field), ctx)
      // access control
      isAuth(camelCase('update', 'room', field), ctx)

      room[field] = input[field]
    }

    return room.save()
  },
}
