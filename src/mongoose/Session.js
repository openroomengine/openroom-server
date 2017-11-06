import {Schema, connection} from '../mongoose'

const sessionSchema = new Schema({
  // key different from id: changes on every write
  key: {
    type: String,
    required: true,
    index: { // measure efficiency?
      unique: true,
    },
  },
  content: {
    type: Object,
    required: true,
  },
})

export default connection.model('Session', sessionSchema)
