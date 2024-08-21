import axios from 'axios'

let base = import.meta.env.VITE_API_URL

const publicApi = axios.create({
  baseURL: base,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default publicApi