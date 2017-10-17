import {
  GraphQLNonNull,
} from 'graphql'

import RoomType from '../../room'
import CreateRoomInputType from './createRoomInput'

import Room from '../../../mongoose/Room.js'

import isAuth from '../../../helpers/isAuth.js'

export default {
  type: RoomType,
  args: { // input type
    input: {
      type: new GraphQLNonNull(CreateRoomInputType),
    },
  },
  resolve: async (prev, args, ctx) => {
    // access control
    isAuth('createRoom', ctx)

    // shortcuts
    const {name, description} = args.input

    // create room
    const room = await new Room({
      name,
      description,
    }).save()

    return {payload: room}
  },
}
