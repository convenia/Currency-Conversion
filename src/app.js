import fst from 'fastify'

export default fst({
  logger: true,
  bodyLimit: 8388608 // 8Mb
})
