import {
  GraphQLObjectType,
} from 'graphql'

import id from './id.js'
import user from './user.js'
import createdAt from './createdAt.js'

export default new GraphQLObjectType({
  name: 'Booking',
  description: 'Reservation of a room by a user over a time interval.',
  fields: {
    id,
    user,
    createdAt,
  },
})
