import { expect } from 'chai'
import { readFileSync } from 'fs'
import * as td from 'testdouble'

import { CURRENCY_QUOTES } from '#content/urls'
import CurrencyQuote from '#test:modules/http/CurrencyQuote'
import getFallbackData from '#test:modules/stubs/CurrencyConversionFallback'
import app from '#test:modules/app'

describe('Currency conversion query', () => {
  const query = readFileSync('test/graphql/GetCurrencyConversion.graphql', { encoding: 'utf8' })
  const variables = { baseCurrency: 'BRL', convertCurrencies: [ 'USD', 'EUR' ] }
  const expectedRoute = '/last/USD-BRL,EUR-BRL'
  const expectedGetData = {
    USDBRL: {
      code: 'USD',
      bid: '5.7276',
      timestamp: '1618315045',
    },
    EURBRL: {
      code: 'EUR',
      bid: '6.8195',
      timestamp: '1618315093',
    }
  }

  const expectedResponseData = {
    baseCurrencyInfo: {
      code: 'BRL',
      symbol: 'R$',
    },
    conversions: [
      {
        currencyInfo: {
          code: 'USD',
          symbol: '$'
        },
        rate: 5.7276,
        timestamp: 1618315045
      },
      {
        currencyInfo: {
          code: 'EUR',
          symbol: '€'
        },
        rate: 6.8195,
        timestamp: 1618315093
      }
    ]
  }

  it('should return api data', async () => {
    CurrencyQuote.get(expectedRoute).reply(200, expectedGetData)

    const response = await app
    .post('/graphql')
    .send({
      variables,
      query
    })

    expect(response.body.data.currencyConversion).to.deep.equal(expectedResponseData)
  })

  it('should return fallback data when api call fails', async () => {
    CurrencyQuote.get(expectedRoute).reply(500)
    td.when(getFallbackData()).thenResolve(expectedGetData)

    const response = await app
      .post('/graphql')
      .send({
        variables,
        query
      })

    expect(response.body.data.currencyConversion).to.deep.equal(expectedResponseData)
  })
})
