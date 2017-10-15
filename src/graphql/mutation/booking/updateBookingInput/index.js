import {
  GraphQLInputObjectType,
} from 'graphql'

import user from './user.js'

export default new GraphQLInputObjectType({
  name: 'UpdateBookingInput',
  fields: {
    user,
  },
})
