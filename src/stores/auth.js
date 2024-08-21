
import publicApi from '@/http/public'
import  privateApi  from '@/http/private'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
        router: useRouter(),
        credentials:{
            email: 'test@example.com',
            password: 'password',
        }
    }),
    getters: {
        isAuthenticated: (state) => state.token !== null,
    },
    actions: {
        login() {
            publicApi({
                method: 'post',
                url: 'login',
                data: this.credentials
            }).then(response => {
                this.user = response.data.user
                this.token = response.data.token
                this.router.push('/')
            })
        },
        logout() {
            privateApi.setup()({
                method: 'post',
                url: 'logout',
                data: {
                    token: this.token
                }
            }).then(() => {
                this.user = null
                this.token = null
                this.router.push('/login')
            })
        },
    },
    persist:{
        paths: ['user', 'token']
    }
})