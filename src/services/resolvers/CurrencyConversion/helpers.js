const sanitizeCode = code => code
  .toUpperCase()
  .replace(/[^A-Z]/g, '')

export const createRouteParam = ({ baseCurrency, convertCurrencies }) => convertCurrencies
  .map(convertCurrency => `${sanitizeCode(convertCurrency)}-${sanitizeCode(baseCurrency)}`)
  .join(',')

export const createKeys = ({ baseCurrency, convertCurrencies }) => convertCurrencies
  .map(convertCurrency => `${sanitizeCode(convertCurrency)}${sanitizeCode(baseCurrency)}`)
