import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'

import Booking from '../booking'

export default {
  type: Booking,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (prev, args, ctx) => 'TODO',
}
