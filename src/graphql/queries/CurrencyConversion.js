import { GraphQLNonNull, GraphQLList, GraphQLString } from 'graphql'
import CurrencyConversion from '#graphql/types/CurrencyConversion'
import { resolveCurrencyConversion } from '#services/resolvers/CurrencyConversion'

export default {
  type: CurrencyConversion,

  args: {
    baseCurrency: { type: new GraphQLNonNull(GraphQLString) },
    convertCurrencies: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) }
  },

  resolve: resolveCurrencyConversion
}
