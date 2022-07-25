import * as td from 'testdouble'
import nock from 'nock'

import { fastifyInstance } from '#test:modules/app'

export const mochaHooks = {
  async beforeAll () {
    nock.disableNetConnect()
    nock.enableNetConnect('127.0.0.1')

    const { default: launch } = await import('#src/launch')

    await launch(fastifyInstance, 3001)
    await fastifyInstance.ready()
  },

  afterAll () {
    nock.enableNetConnect()
    return fastifyInstance.close()
  },

  afterEach () {
    nock.cleanAll()
    td.reset()
  }
}
