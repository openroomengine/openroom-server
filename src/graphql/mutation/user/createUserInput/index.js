import {
  GraphQLInputObjectType,
} from 'graphql'

import username from './username.js'
import password from './password.js'
import role from './role.js'

export default new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: {
    username,
    password,
    role,
  },
})
