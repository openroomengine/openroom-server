import mongoose from 'mongoose'
import mongooseAsync from 'mongoose-async'

import settings from '../settings.js'

// set native promises for mongoose
mongoose.Promise = Promise

// create new connection
const connection = mongoose.createConnection(settings.db.uri, {
  useMongoClient: true,
})

// monitor connection
connection.on('open', () => console.log(`Connected to ${settings.db.uri}`))
connection.on('error', (error) => console.error(error))

// plugins
mongoose.plugin(mongooseAsync, {
  setters: {
    applyOn: 'change',
  },
})

export {
  connection,
  mongoose,
}

export const Schema = mongoose.Schema
