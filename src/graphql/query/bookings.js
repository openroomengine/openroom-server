import {
  GraphQLList,
  GraphQLID,
  GraphQLInt,
} from 'graphql'

import BookingType from '../booking'

import Booking from '../../mongoose/Booking.js'

export default {
  type: new GraphQLList(BookingType),
  args: {
    after: {
      type: GraphQLID, // null means start from beginning
    },
    count: {
      type: GraphQLInt,
    },
  },
  resolve: async (prev, args, ctx) => {
    const {after, count} = args

    // cursor
    const condition = after ? {_id: {$gt: after}} : {}

    // get bookings
    let bookings = await Booking
      .find(condition)
      .limit(count)

    // namespace
    bookings = bookings.map(booking => ({payload: booking}))

    return bookings
  },
}
