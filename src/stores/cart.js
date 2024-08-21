
import privateApi from '@/http/private'
import { defineStore } from 'pinia'
import { Toast } from 'bootstrap'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
        data: {
            total: 0.00,
            items: []
        },
        message: ''
    }),
    actions: {
        addToCart(product) {

            let total = 0.00

            product.cantidad = 1

            this.data.items.push(product)

            this.data.items.forEach(p => {
                total += p.price * p.cantidad
            })

            this.data.total = total
        },
        removeFromCart(product) {
            this.data.items = this.data.items.filter(p => p.id !== product.id)
            this.data.total = this.data.items.reduce((acc, p) => acc + p.price, 0.00)
        },
        completeOrder() {

            privateApi.setup()({
                method: 'post',
                url: 'orders',
                data: this.data
            })
                .then(response => {
                    this.message = response.data.message
                    const toast = new Toast('#liveToast')
                    toast.show()
                    this.data ={
                        total: 0.00,
                        items: []
                    }
                })
                .catch(error => {
                    if (error.response.status === 401) {
                        this.router.push('/login')
                    }
                })

        }

    },
    persist: {
        paths: ['cart', 'data']
    }
})