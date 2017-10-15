import assert from 'assert'
import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'

import BookingType from '../../booking'

import Booking from '../../../mongoose/Booking.js'

import isAuth from '../../../helpers/isAuth.js'

export default {
  type: BookingType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (prev, args, ctx) => {
    // access control
    isAuth('deleteBooking', ctx)

    // find booking
    const booking = await Booking.findById(args.id)

    // make sure booking exists
    assert(booking, `Booking with id "${args.id}" does not exist.`)

    // delete booking
    return booking.remove()
  },
}
