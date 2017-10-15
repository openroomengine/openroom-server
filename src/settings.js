import scrypt from 'scrypt'

import roles from './roles.js'

const settings = {
  authorization: {
    defaultUserRole: 'user',
    defaultSessionRole: 'visitor',
    roles,
  },
  cors: {
    origin: ['http://localhost:3000'],
  },
  db: {
    name: 'openroom-server',
    protocol: 'mongodb',
    host: 'localhost',
    port: '27017',
  },
  dev: process.env.NODE_ENV !== 'production',
  routes: {
    graphql: '/graphql',
    graphiql: '/graphiql',
  },
  scrypt: scrypt.paramsSync(
    0.1, // maxtime
  ),
  server: {
    name: 'Openroom Server',
    protocol: 'http',
    host: 'localhost',
    port: '8080',
  },
  session: {
    secrets: ['p7nnz6UtNLlZ8ZnYoM9J'],
  },
}

// shortcuts
const {server, db} = settings

// server uri
server.uri = `${server.protocol}://${server.host}:${server.port}`

// database uri (used by mongoose)
db.uri = `${db.protocol}://${db.host}:${db.port}/${db.name}`

export default settings
