import fse from 'fs-extra'
import currencyQuote from '#services/http/CurrencyQuotes'

(async () => {
  const response = await currencyQuote.get('available')
  const availableConversions = Object.keys(response?.data) || []

  const allConversions = (await Promise.allSettled(
    availableConversions.map(async conversion => {
      const response = await currencyQuote.get(`${conversion}`)
      return { ...response?.data }
    })))
    .filter(response => response?.status === 'fulfilled')
    .map(({ value }) => value?.[0])

  const readableConversions = Object.fromEntries(
    allConversions.map(data => [ `${data?.code || ''}${data?.codein || ''}`, data ])
  )

  fse.outputJSONSync('fallback/CurrencyConversions.json', readableConversions)
})()
