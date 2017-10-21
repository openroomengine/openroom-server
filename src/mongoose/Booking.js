import moment from 'moment'

import {Schema, connection} from '../mongoose'

import toMoment from '../helpers/toMoment.js'
import toDate from '../helpers/toDate.js'

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true,
    get: toMoment,
    set: toDate,
  },
})

export default connection.model('Booking', bookingSchema)
