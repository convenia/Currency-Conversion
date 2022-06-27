export default async () => (await import('#fallback/CurrencyConversions.json', { assert: { type: 'json' } })).default
