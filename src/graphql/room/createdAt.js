import MomentType from '../Moment.js'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: MomentType,
  resolve: ({payload: room}, args, ctx) => {
    // access control
    isAuth('readRoomCreatedAt', ctx)

    return room.createdAt
  },
}
