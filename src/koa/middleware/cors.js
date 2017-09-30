import cors from 'kcors'

import settings from '../../settings.js'

export default cors({
  origin: settings.cors.origin,
  credentials: true,
  allowedMethods: 'GET,POST',
})
