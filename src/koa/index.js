import Koa from 'koa'

import settings from '../settings.js'

// shortcut
const {server, session, dev} = settings

// middleware
import cors from './middleware/cors.js'
import session from './middleware/session.js'
import router from './middleware/router.js'

const app = new Koa()

// singned cookies
app.keys = session.secrets

// apply middleware
app.use(cors)
app.use(session(app))
app.use(router.routes())
app.use(router.allowedMethods())

// start server
app.listen(server.port)

// start up message
console.log(`${server.name} running on ${server.uri} (${dev ? 'development' : 'production'}).`)
