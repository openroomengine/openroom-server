import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'

import BookingType from '../booking'

import Booking from '../../mongoose/Booking.js'

export default {
  type: BookingType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (prev, args, ctx) => Booking.findById(args.id),
}
