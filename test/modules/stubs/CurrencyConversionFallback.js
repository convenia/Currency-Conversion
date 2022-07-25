import { replaceEsm } from 'testdouble'

const { default: stub } = await replaceEsm('../../../src/services/resolvers/CurrencyConversion/getFallbackData.js')

export default stub
