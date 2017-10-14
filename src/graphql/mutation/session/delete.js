import assert from 'assert'

import DeleteSessionPayloadType from './deleteSessionPayload'

export default {
  type: DeleteSessionPayloadType,
  resolve: (prev, args, ctx) => {
    // can only logout if user is logged in
    assert(ctx.session.user, 'You are not logged in.')

    // delete session
    ctx.session = null

    return 'TODO'
  },
}
