import supertest from 'supertest'
import fst from 'fastify'

export const fastifyInstance = fst({
  logger: { level: 'error' },
  bodyLimit: 8388608 // 8Mb
})

export default supertest(fastifyInstance.server)
