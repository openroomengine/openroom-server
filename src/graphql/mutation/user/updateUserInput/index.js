import {
  GraphQLInputObjectType,
} from 'graphql'

import username from './username.js'
import password from './password.js'

export default new GraphQLInputObjectType({
  name: 'UpdateUserInput',
  fields: {
    username,
    password,
  },
})
