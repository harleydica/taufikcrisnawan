import Axios from 'axios'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

const headers = { 'Content-Type': 'application/json' }

const umamiClient = Axios.create({
  baseURL: SITE_URL,
  headers
})

export default umamiClient
