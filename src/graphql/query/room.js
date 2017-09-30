import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'

import Room from '../room'

export default {
  type: Room,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (prev, args, ctx) => 'TODO',
}
