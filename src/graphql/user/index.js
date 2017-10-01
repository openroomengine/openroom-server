import {
  GraphQLObjectType,
} from 'graphql'

import id from './id.js'
import name from './name.js'

export default new GraphQLObjectType({
  name: 'User',
  description: 'Human that interacts with the system; rentee, member, admin...',
  fields: {
    id,
    name,
  },
})
