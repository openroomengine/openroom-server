# Todo
## Currently
- plural queries

## Long term
- isAuth signature not scalable: consider rewrite if limitations keep increasing
- review session query content
- cannot log out yet (no server side session)
- optimization
  - database caching
  - prevent over-fetching
- DOS protection (rate limiting...)

# Conventions
- place `isAuth` as high in the resolver as possible (first or after receiving user info from db)
- namespace `prev` argument
