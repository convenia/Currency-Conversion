import launch from '#src/launch'
import { fastifyInstance } from '#test:modules/app'

export const mochaHooks = {
  async beforeAll () {
    await launch(fastifyInstance, 3001)
    await fastifyInstance.ready()
  },

  afterAll () {
    return fastifyInstance.close()
  }
}
