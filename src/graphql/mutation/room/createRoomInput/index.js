import {
  GraphQLInputObjectType,
} from 'graphql'

import name from './name.js'
import description from './description.js'

export default new GraphQLInputObjectType({
  name: 'CreateRoomInput',
  fields: {
    name,
    description,
  },
})
