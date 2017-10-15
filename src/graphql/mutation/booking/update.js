import assert from 'assert'
import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'

import BookingType from '../../booking'
import UpdateBookingInputType from './updateBookingInput'

import Booking from '../../../mongoose/Booking.js'

import isAuth from '../../../helpers/isAuth.js'
import camelCase from '../../../helpers/camelCase.js'

export default {
  type: BookingType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    input: {
      type: new GraphQLNonNull(UpdateBookingInputType),
    },
  },
  resolve: async (prev, args, ctx) => {
    // shortcuts
    const {id, input} = args

    // find booking
    const booking = await Booking.findById(id)

    // make sure booking exists
    assert(booking, `Booking with id "${id}" does not exist.`)

    // update booking
    for (const field in input) {
      console.log(camelCase('update', 'booking', field), ctx)
      // access control
      isAuth(camelCase('update', 'booking', field), ctx)

      booking[field] = input[field]
    }

    return booking.save()
  },
}
