import axios from 'axios'
import { CURRENCY_QUOTES } from '#content/urls'

export default axios.create({
  baseURL: CURRENCY_QUOTES
})
