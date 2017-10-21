// moment scalar (custom)

import moment from 'moment'

import {
  GraphQLScalarType,
} from 'graphql'

import invalid from '../errors/invalidDate.js'

export default new GraphQLScalarType({
  name: 'Moment',
  description: 'Moment objects facing resolver, output js date, accept valid moment input. All utc.',
  serialize: ($date) => { // send to client
    // make sure moment is valid
    if (!$date.isValid()) throw invalid($date.input)

    // js timestamp to client
    return $date.toDate()
  },
  parseValue: (date) => { // read from variable
    // convert to moment
    const $date = moment.utc(date)

    // make sure moment is valid
    if (!$date.isValid()) throw invalid(date)

    // moment to resolver
    return $date
  },
  parseLiteral: (ast) => { // read from graphql
    // shortcut
    let date = ast.value

    // turn string into int
    if (ast.kind === 'IntValue') date = parseInt(date, 10)

    // convert to moment
    const $date = moment.utc(date)

    // make sure moment is valid
    if (!$date.isValid()) throw invalid(date)

    // moment to resolver
    return $date
  },
})
