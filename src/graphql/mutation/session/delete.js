import assert from 'assert'

import DeleteSessionPayloadType from './deleteSessionPayload'

import isAuth from '../../../helpers/isAuth.js'

export default {
  type: DeleteSessionPayloadType,
  resolve: (prev, args, ctx) => {
    // can only logout if user is logged in (redundant when role permissions are chosen smartly)
    assert(ctx.session.user, 'You are not logged in.')

    // access control
    isAuth('deleteSession', ctx)

    // delete session
    ctx.session = null

    return 'TODO'
  },
}
