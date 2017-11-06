# Todo
## Currently
- count fields?

## Long term
- isAuth signature not scalable: consider rewrite if limitations keep increasing
- review session query content
- cannot log out yet (no server side session)
- optimization
  - database caching
  - prevent over-fetching
- DOS protection (rate limiting...)
- determine efficiency of indices (especially session key)

# Conventions
- place `isAuth` as high in the resolver as possible (first or after receiving user info from db)
- namespace `prev` argument
- variables containing moment objects start with `$`
- NEVER USE LOGIN STATUS COOKIE TO DETERMINE ACCESS, may only be used by client to determine whether it should skip login query or not
