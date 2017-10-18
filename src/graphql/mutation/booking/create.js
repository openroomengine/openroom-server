import BookingType from '../../booking'
import CreateBookingInputType from './createBookingInput'

import Booking from '../../../mongoose/Booking.js'

import isAuth from '../../../helpers/isAuth.js'

export default {
  type: BookingType,
  args: {
    input: {
      type: CreateBookingInputType,
    },
  },
  resolve: async (prev, args, ctx) => {
    // shortcut
    const {input} = args

    // access control
    isAuth('createBooking', ctx, input.user)

    // shortcuts
    const user = input.user || ctx.session.user.id

    // create booking
    const booking = await new Booking({
      user,
    }).save()

    return {payload: booking}
  },
}
