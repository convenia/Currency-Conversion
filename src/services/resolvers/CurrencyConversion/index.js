import getConversions from './getConversions'

export const resolveCurrencyConversion = (_, args) => {
  return {
    baseCurrencyInfo: { code: args.baseCurrency },
    args
  }
}

export const resolveConversions = ({ args }) => getConversions(args)
