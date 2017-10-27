import MomentType from '../Moment.js'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: MomentType,
  description: '[readRoomCreatedAt] timestamp at which room entry was created',
  resolve: ({payload: room}, args, ctx) => {
    // access control
    isAuth('readRoomCreatedAt', ctx)

    return room.createdAt
  },
}
