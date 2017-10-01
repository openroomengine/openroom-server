import Koa from 'koa'

import settings from '../settings.js'

// middleware
import cors from './middleware/cors.js'
import session from './middleware/session.js'
import router from './middleware/router.js'

const app = new Koa()

// singned cookies
app.keys = settings.session.secrets

// apply middleware
app.use(cors)
app.use(session(app))
app.use(router.routes())
app.use(router.allowedMethods())

// start server
app.listen(settings.server.port)

// start up message
console.log(`${settings.server.name} running on ${settings.server.uri} (${settings.dev ? 'development' : 'production'}).`)
