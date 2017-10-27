import {
  GraphQLString,
} from 'graphql'

export default {
  type: GraphQLString,
  description: 'username of new user (should not exist already)',
}
