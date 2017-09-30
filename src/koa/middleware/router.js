import Router from 'koa-router'
import parse from 'koa-body'

import settings from '../../settings.js'

import graphql from '../routes/graphql'
import graphiql from '../routes/graphiql'

// create router
const router = new Router()

const {routes} = settings

router.post('graphql', routes.graphql, parse(), graphql)
router.get('graphiql', routes.graphiql, graphiql)

export default router
