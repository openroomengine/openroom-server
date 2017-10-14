import assert from 'assert'
import {graphqlKoa} from 'apollo-server-koa'

import settings from '../../settings.js'

import schema from '../../graphql/schema.js'

// options are evaluated per request
export default graphqlKoa(ctx => {
  // write horizontal line in terminal before each request
  console.log('----------------------------------------')

  return {
    schema,
    rootValue: null,
    context: ctx,
    debug: settings.dev,
    formatError: (err) => {
      assert(err, 'Received null or undefined error.')

      // allow user-friendly messages
      let message = err.message

      // get original error
      const oErr = err.originalError

      // Mongoose: cast error (invalid input format)
      if (err.name === 'CastError') {
        message = `"${err.value}" is not a valid "${err.kind}". (at "${err.model.modelName}.${err.path}")`
      }

      // Mongodb: duplicate key error
      if (oErr && oErr.name === 'MongoError' && oErr.code === 11000) {
        // username taken
        if (err.path[0] === 'createUser') {
          message = `Username "${oErr.getOperation().username}" already exists. Please try another one.`
        }
      }

      return {
        message,
        locations: err.locations,
        path: err.path,
      }
    },
  }
})
