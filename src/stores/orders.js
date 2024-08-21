
import privateApi from '@/http/private'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'

export const useOrdersStore = defineStore('orders', {
    state: () => ({
        orders: [],
        order: {
            id: null,
            user_id: null,
            order_number: null,
            total: null,
            order_details: [],
            user: {
                id: null,
                name: null,
            }
        },
        route: useRoute()
    }),
    actions: {
        getOrders() {

            privateApi.setup()({
                method: 'get',
                url: 'orders'
            })
                .then(response => {
                    this.orders = response.data
                })
                .catch(error => {
                    if (error.response.status === 401) {
                        this.router.push('/login')
                    }
                })

        },
        getOrder() {
            privateApi.setup()({
                method: 'get',
                url: 'orders/' + this.route.params.id
            })
                .then(response => {
                    this.order = response.data
                })
                .catch(error => {
                    if (error.response.status === 401) {
                        this.router.push('/login')
                    }
                })
        }

    },
})