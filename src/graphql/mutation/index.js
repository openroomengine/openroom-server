import {
  GraphQLObjectType,
} from 'graphql'

import createSession from './session/create.js'
import deleteSession from './session/delete.js'
import createUser from './user/create.js'
// import updateUser from './user/update.js'
// import deleteUser from './user/delete.js'

export default new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation.',
  fields: {
    // session
    createSession, // login
    deleteSession, // logout
    // user
    createUser,
    // updateUser,
    // deleteUser,
  },
})
