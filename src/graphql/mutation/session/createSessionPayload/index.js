import {
  GraphQLObjectType,
} from 'graphql'

import userid from './userid.js'
import username from './username.js'

export default new GraphQLObjectType({
  name: 'CreateSessionPayload',
  description: 'Data provided after successful login.',
  fields: {
    userid,
    username,
  },
})
