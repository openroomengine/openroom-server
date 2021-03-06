import {
  GraphQLObjectType,
} from 'graphql'

import id from './id.js'
import name from './name.js'
import description from './description.js'
import createdAt from './createdAt.js'

export default new GraphQLObjectType({
  name: 'Room',
  description: 'Rentable unit.',
  fields: {
    id,
    name,
    description,
    createdAt,
  },
})
