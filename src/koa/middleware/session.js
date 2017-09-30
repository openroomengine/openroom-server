import session from 'koa-session'

const config = {
  key: 'session',
}

export default (app) => session(config, app)
