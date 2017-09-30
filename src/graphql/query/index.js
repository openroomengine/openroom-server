import {
  GraphQLObjectType,
} from 'graphql'

import user from './user.js'
import users from './users.js'
import room from './room.js'
import rooms from './rooms.js'
import booking from './booking.js'
import bookings from './bookings.js'

export default new GraphQLObjectType({
  name: 'Query',
  description: 'Root query.',
  fields: {
    user,
    users,
    room,
    rooms,
    booking,
    bookings,
  },
})
