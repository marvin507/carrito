
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'


export default {
  setup(){

    const authStore = useAuthStore()
    let base = import.meta.env.VITE_API_URL

    const privateApi = axios.create({
      baseURL: base,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authStore.token}`
      }
    })
    return privateApi
  }
}