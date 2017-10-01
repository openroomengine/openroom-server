import {graphiqlKoa} from 'apollo-server-koa'

import settings from '../../settings.js'

export default graphiqlKoa({
  endpointURL: settings.routes.graphql,
})
