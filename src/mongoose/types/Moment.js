import moment from 'moment'

import {mongoose} from '../../mongoose'

import invalid from '../../errors/invalidDate.js'

const Moment = function (key, options) {
  mongoose.SchemaType.call(this, key, options, 'Moment')
}
Moment.prototype = Object.create(mongoose.SchemaType.prototype)

Moment.prototype.cast = function (date) {
  // convert to moment
  const $date = moment.utc(date)

  // make sure moment is valid
  if (!$date.isValid()) throw invalid($date.input)

  // moment to resolver
  return $date
}

// Moment.prototype.get = function (val) {
//   console.log(val)
// }

// console.log(mongoose.SchemaType.prototype.default.toString())

// Moment.prototype.default = function (val) {
//   if (arguments.length === 1) {
//     if (val === void 0) {
//       this.defaultValue = void 0;
//       return void 0;
//     }
//     this.defaultValue = val;
//     return this.defaultValue;
//   } else if (arguments.length > 1) {
//     this.defaultValue = utils.args(arguments);
//   }
//   return this.defaultValue;
// }

// Moment.prototype.default = function (input, ...rest) {
//   console.log(input, rest)
//
//   const $now = moment.utc()
//
//   this.defaultValue = $now
//
//   return $now
// }

Moment.prototype.toJSON = function (val) {
  console.log(val)

  return val
}

export default Moment

mongoose.Schema.Types.Moment = Moment
