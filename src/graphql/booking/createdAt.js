import MomentType from '../Moment.js'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: MomentType,
  description: '[readBookingCreatedAt(:own)] timestamp at which booking entry was created',
  resolve: ({payload: booking}, args, ctx) => {
    // access control
    isAuth('readBookingCreatedAt', ctx, booking.user)

    return booking.createdAt
  },
}
