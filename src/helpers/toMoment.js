import moment from 'moment'

import invalid from '../errors/invalidDate.js'

export default (date) => {
  // convert to moment
  const $date = moment.utc(date)

  // make sure moment is valid
  if (!$date.isValid()) throw invalid(date)

  // return moment
  return $date
}
