import {
  GraphQLObjectType,
} from 'graphql'

import createSession from './session/create.js'
import deleteSession from './session/delete.js'
import createRoom from './room/create.js'
import updateRoom from './room/update.js'
import deleteRoom from './room/delete.js'
import createBooking from './booking/create.js'
import updateBooking from './booking/update.js'
import deleteBooking from './booking/delete.js'
import createUser from './user/create.js'
import updateUser from './user/update.js'
import deleteUser from './user/delete.js'

export default new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation.',
  fields: {
    // session
    createSession, // login
    deleteSession, // logout
    // room
    createRoom,
    updateRoom,
    deleteRoom,
    // booking
    createBooking,
    updateBooking,
    deleteBooking,
    // user
    createUser,
    updateUser,
    deleteUser,
  },
})
