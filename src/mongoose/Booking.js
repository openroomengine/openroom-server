import moment from 'moment'

import {Schema, connection} from '../mongoose'

import invalid from '../errors/invalidDate.js'

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
    get: function (date) {
      // convert to moment
      const $date = moment.utc(date)

      // make sure moment is valid
      if (!$date.isValid()) throw invalid($date.input)

      // moment to resolver
      return $date
    },
    set: function ($date) {
      // make sure moment is valid
      if (!$date.isValid()) throw invalid($date.input)

      // js timestamp to db
      return $date.toDate()
    },
  },
})

export default connection.model('Booking', bookingSchema)
