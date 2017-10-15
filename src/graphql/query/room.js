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
  resolve: (prev, args, ctx) => Room.findById(args.id),
}
