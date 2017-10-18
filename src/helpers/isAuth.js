import settings from '../settings.js'

const auth = settings.authorization
const {roles} = auth

const unauth = new Error('You are not authorized to complete this action.')

// is authorized?
// NOTE: Do not use the same permissions with different limitations on the same role.
//       Only the first ocurrence of a permission is taken into account, unexpected behavior may arise. See (1).
export default (rules, {session}, subject = null) => {
  // logged out
  let role = auth.defaultSessionRole
  let actor = null

  // logged in
  if (session.user) {
    role = session.user.role
    actor = session.user.id
  }

  // normalize rules
  if (typeof rules === 'string') rules = [rules]

  // granted permissions
  const grants = roles[role]

  // verify every rule
  for (const rule of rules) {
    // find grant with first part that matches rule
    const grant = grants
      .find(grant => grant.split(':')[0] === rule) // (1)

    // unauthorized (permission lacking entirely)
    if (!grant) throw unauth

    const limitation = grant.split(':')[1]

    // unauthorized (not owning resource)
    if (
      limitation === 'own' &&
      (!actor || !subject || actor !== subject)
    ) throw unauth
  }

  // authorized
  return true
}
