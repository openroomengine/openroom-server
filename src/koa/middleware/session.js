import session from 'koa-session'

import settings from '../../settings.js'
import Session from '../../mongoose/Session.js'

const auth = settings.authorization

class SessionStore {
  constructor (ctx) {
    this.ctx = ctx
    this.session = null
    this.cached = false
  }

  async get (key, maxAge, {rolling}) {
    if (!this.cached) {
      this.cached = true
      this.session = await Session.findOne({key})
    }

    return this.session.content
  }

  async set (newKey, newContent, maxAge, {rolling, changed}) {
    // working session
    let session = this.session || new Session()

    // update/add key
    session.key = newKey

    // update/add content
    session.content = newContent

    // save
    session = await session.save()

    // update internal state
    this.cached = true
    this.session = session

    // update login status cookie
    this.loginStatusCookie()
  }

  async destroy (key) {
    if (this.session) {
      // remove session
      await this.session.remove()

      // update internal state
      // NOTE: still cashed: prevent script from accessing db since there is nothing for sure
      this.session = null

      // update login status cookie
      this.loginStatusCookie()
    }
  }

  loginStatusCookie () {
    const {ctx, session} = this
    const key = 'openroom.loggedIn'
    const cookieSettings = {httpOnly: false, signed: false}

    // set login status cookie to true
    if (
      session &&
      session.content &&
      session.content.user &&
      session.content.user.role !== auth.defaultSessionRole
    ) {
      ctx.cookies.set(key, true, cookieSettings)
    } else {
      ctx.cookies.set(key, false, cookieSettings)
    }
  }
}

const config = {
  key: 'openroom.session',
  ContextStore: SessionStore,
}

export default (app) => session(config, app)
