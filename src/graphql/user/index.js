import {
  GraphQLObjectType,
} from 'graphql'

import id from './id.js'
import username from './username.js'
import role from './role.js'

export default new GraphQLObjectType({
  name: 'User',
  description: 'Human that interacts with the system; rentee, member, admin...',
  fields: {
    id,
    username,
    role,
  },
})
