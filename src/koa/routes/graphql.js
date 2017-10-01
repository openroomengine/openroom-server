import assert from 'assert'
import {graphqlKoa} from 'apollo-server-koa'

import settings from '../../settings.js'

import schema from '../../graphql/schema.js'

// options are evaluated per request
export default graphqlKoa(ctx => ({
  schema,
  rootValue: null,
  context: {},
  debug: settings.dev,
  formatError: (err) => {
    assert(err, 'Received null or undefined error.')

    // get original error
    const oErr = err.originalError

    console.log(err.source)

    if (oErr.name === 'MongoError' && oErr.code === 11000) {
      console.log('dup key')
    }

    return {
      message: err.message,
      locations: err.locations,
      path: err.path,
    }
  },
}))
