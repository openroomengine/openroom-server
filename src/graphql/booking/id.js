import {
  GraphQLID,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLID,
  description: '[readBookingId(:own)] [unique] booking id',
  resolve: ({payload: booking}, args, ctx) => {
    // access control
    isAuth('readBookingId', ctx, booking.user)

    return booking.id
  },
}
