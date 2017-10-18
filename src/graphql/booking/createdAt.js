import MomentType from '../Moment.js'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: MomentType,
  resolve: ({payload: booking}, args, ctx) => {
    // access control
    isAuth('readBookingCreatedAt', ctx, booking.user)

    return booking.createdAt
  },
}
