import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'

import User from '../user'

export default {
  type: User,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (prev, args, ctx) => 'TODO',
}
