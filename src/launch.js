import mercurius from 'mercurius'
import { schema } from '#graphql'

export default async (app, port) => {
  try {
    app.register(mercurius, {
      schema,
      queryDepth: 23,
      graphiql: true
    })

    await app.listen({ port: port || 3000, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
