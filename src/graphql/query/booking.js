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
  resolve: async (prev, args, ctx) => {
    const booking = await Booking.findById(args.id)

    return {payload: booking}
  },
}
