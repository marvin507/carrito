<script setup>

import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import { onMounted } from 'vue';

const productsStore = useProductsStore()
const cartStore = useCartStore()

onMounted(() => {
    productsStore.getProducts()
})

</script>
<template>
    <div class="row">
        <div class="col-md-4 mb-4" v-for="product in productsStore.products" :key="product.id">
            <div class="card">
                <img src="https://placehold.co/600x400?text=Hello+World" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">$ {{ product.price }}</h6>
                    <p class="card-text">{{ product.description.slice(0, 35) }}...</p>



                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group me-2" role="group" aria-label="First group">
                            <button v-if="!productsStore.validate_if_item_in_list(product.id)"
                                @click.prevent="cartStore.addToCart(product)" class="btn btn-primary">Agregar al
                                carrito</button>
                            <button v-else disabled class="btn btn-primary">Producto en el carrito</button>
                        </div>
                        <div class="btn-group me-2" role="group" aria-label="Second group">
                            <button type="button" class="btn btn-primary">
                                En Stock <span class="badge text-bg-secondary">{{ product.stock }}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>