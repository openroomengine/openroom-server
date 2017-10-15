import {
  GraphQLID,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLID,
  resolve: (booking, args, ctx) => {
    // access control
    isAuth('readBookingUser', ctx, booking.user)

    return booking.user
  },
}
