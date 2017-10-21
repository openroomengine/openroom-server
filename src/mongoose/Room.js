import {Schema, connection} from '../mongoose'

import toMoment from '../helpers/toMoment.js'
import toDate from '../helpers/toDate.js'

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true,
    get: toMoment,
    set: toDate,
  },
})

export default connection.model('Room', roomSchema)
