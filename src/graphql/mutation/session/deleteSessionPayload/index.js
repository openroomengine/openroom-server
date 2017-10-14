import {
  GraphQLObjectType,
} from 'graphql'

import userid from './userid.js'
import username from './username.js'

export default new GraphQLObjectType({
  name: 'DeleteSessionPayload',
  description: 'Data provided after successful logout.',
  fields: {
    userid,
    username,
  },
})
