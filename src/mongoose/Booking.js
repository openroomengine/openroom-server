import {Schema, connection} from '../mongoose'

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true,
  },
})

export default connection.model('Booking', bookingSchema)
