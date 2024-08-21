
import  privateApi  from '@/http/private'
import { defineStore } from 'pinia'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    cart: useCartStore(),
    router: useRouter()
  }),
  actions: {
    getProducts() {
        privateApi.setup()({
            method: 'get',
            url: 'products'
        })
        .then(response => {
            this.products = response.data
        })
        .catch(error => {
            if (error.response.status === 401) {
                this.router.push('/login')
            }
        })
    },
    validate_if_item_in_list(id) {
      let even = (element) => element.id == id;
      return this.cart.data.items.some(even);
    },
}
})