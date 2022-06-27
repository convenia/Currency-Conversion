import currencyQuote from '#services/http/CurrencyQuote'
import { createKeys, createRouteParam } from './helpers'
import getFallbackData from './getFallbackData'

const formatConversion = ({ code, ...data }) => ({
  ...data,
  currencyInfo: { code }
})

const formatData = (data, args) => {
  const dataKeys = createKeys(args)

  return dataKeys.reduce((formattedData, key) => [
    ...formattedData, ...(data?.[key] ? [ formatConversion(data[key]) ] : [])
  ], [])
}

const fetchData = async (args) => {
  const routeParam = createRouteParam(args)
  const response = await currencyQuote
    .get(`/last/${routeParam}`)

  return formatData(response?.data, args)
}

export default async (args) => {
  try {
    const data = await fetchData(args)
    return data
  } catch (e) {
    const fallbackData = await getFallbackData()
    return formatData(fallbackData, args)
  }
}
