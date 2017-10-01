import assert from 'assert'
import scrypt from 'scrypt'

import settings from '../settings.js'
import {Schema, connection} from '../mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  password: {
    type: Schema.Types.Mixed, // in: string, out: kdf buffer
    required: true,
    read: (hash) => Buffer.from(hash, 'base64'),
    write: async (password) => {
      // make sure password is a string
      assert.equal(typeof password, 'string', 'Password should be a string.')

      // hash password
      const hash = await scrypt.kdf(password, settings.scrypt)

      // store as base64
      return hash.toString('base64')
    },
  },
})

export default connection.model('User', userSchema)
