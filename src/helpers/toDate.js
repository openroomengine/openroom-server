import invalid from '../errors/invalidDate.js'

export default ($date) => {
  console.log('s', $date)
  // make sure moment is valid
  if (!$date.isValid()) throw invalid($date.input)

  // convert moment to date
  return $date.toDate()
}
