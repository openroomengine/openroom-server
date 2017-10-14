import settings from '../settings.js'

const auth = settings.authorization
const {roles} = auth

const unauth = new Error('You are not authorized to complete this action.')

// is authorized?
export default (rules, {session}, subject = null) => {
  // logged out
  let role = auth.defaultSessionRole
  let actor = null

  // logged in
  if (session.user) {
    role = session.user.role
    actor = session.user.username
  }

  // normalize rules
  if (typeof rules === 'string') rules = [rules]

  const grants = roles[role]

  for (const rule of rules) {
    // find grant which first part matches rule
    const grant = grants
      .find(grant => grant.split(':')[0] === rule)

    // unauthorized (permission lacking entirely)
    if (!grant) throw unauth

    const limitation = grant.split(':')[1]

    console.log(limitation, actor, subject)

    // unauthorized (not owning resource)
    if (
      limitation === 'own' &&
      (!actor || !subject || actor !== subject)
    ) throw unauth
  }

  // authorized
  return true
}
