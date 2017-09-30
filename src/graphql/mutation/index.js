import {
  GraphQLObjectType,
} from 'graphql'

import createSession from './session/create.js'
import deleteSession from './session/delete.js'

export default new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation.',
  fields: {
    createSession, // login
    deleteSession, // logout
  },
})
