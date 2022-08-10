import mercurius from 'mercurius'
import cors from '@fastify/cors'
import { schema } from '#graphql'

export default async (app, port) => {
  try {
    await app.register(cors, { origin: true })

    app.register(mercurius, {
      schema,
      queryDepth: 23,
      graphiql: true
    })

    app.addHook('onError', async (_, __, error) => {
      app.log.error(error)
    })

    await app.listen({ port: port || 3000, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
