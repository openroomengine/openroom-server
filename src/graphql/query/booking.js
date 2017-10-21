import assert from 'assert'
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
    // get booking
    const booking = await Booking.findById(args.id)

    // make sure booking exists
    assert(booking, `Booking with id "${args.id}" does not exist.`)

    return {payload: booking}
  },
}
