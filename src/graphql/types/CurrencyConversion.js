import getSymbolFromCurrency from 'currency-symbol-map'
import { GraphQLFloat, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'
import { resolveConversions } from '#services/resolvers/CurrencyConversion'

const CurrencyInfo = new GraphQLObjectType({
  name: 'CurrencyInfo',
  description: `
    Currency info with its standard code and its symbol
  `,
  fields: () => ({
    code: { type: GraphQLString },
    symbol: {
      type: GraphQLString,
      resolve: ({ code }) => getSymbolFromCurrency(code) || ''
    },
  })
})

const ConversionInfo = new GraphQLObjectType({
  name: 'ConversionInfo',
  description: `
    Currency conversion info with rate, timestamp
    and the info of the used currency
  `,
  fields: () => ({
    rate: {
      type: GraphQLFloat,
      resolve: ({ bid }) => bid
    },
    timestamp: {
      type: GraphQLInt,
    },
    currencyInfo: {
      type: CurrencyInfo,
    }
  })
})

export default new GraphQLObjectType({
  name: 'CurrencyConversion',
  description: `
    Currency with a list of different currencies conversions
  `,
  fields: () => ({
    baseCurrencyInfo: {
      type: CurrencyInfo
    },
    conversions: {
      type: new GraphQLList(ConversionInfo),
      resolve: resolveConversions
    }
  })
})
