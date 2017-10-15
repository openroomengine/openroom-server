import {Schema, connection} from '../mongoose'

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
})

export default connection.model('Room', roomSchema)
