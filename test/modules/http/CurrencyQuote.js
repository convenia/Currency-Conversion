import nock from 'nock'
import { CURRENCY_QUOTES } from '#content/urls'

export default nock(`${CURRENCY_QUOTES}`)
