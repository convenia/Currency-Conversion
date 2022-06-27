import { GraphQLObjectType } from 'graphql'
import currencyConversion from '#graphql/queries/CurrencyConversion'

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    currencyConversion
  })
})
