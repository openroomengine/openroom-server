import {
  GraphQLID,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLID,
  resolve: ({payload: booking}, args, ctx) => {
    // access control
    isAuth('readBookingId', ctx, booking.user)

    console.log(booking)

    return booking.id
  },
}
