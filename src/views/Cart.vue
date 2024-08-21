<script setup>

import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const updateCart = () => {
    cartStore.data.total = cartStore.data.items.reduce((acc, p) => acc + p.price * p.cantidad, 0.00)
}



</script>
<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Carrito</h5>
                    <p class="card-text">Productos en el carrito</p>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Disponibles</th>
                                <th scope="col">cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in cartStore.data.items" :key="product.id">
                                <th scope="row">{{ product.id }}</th>
                                <td>{{ product.name }}</td>
                                <td>{{ product.description }}</td>
                                <td>{{ product.stock }}</td>
                                <td>
                                    <input type="number" v-model="product.cantidad" min="1" :max="product.stock"
                                        class="form-control" @change="updateCart">
                                </td>
                                <td>{{ product.price.toFixed(2) }}</td>
                                <td><button @click.prevent="cartStore.removeFromCart(product)"
                                        class="btn btn-danger">Eliminar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="col-md-12 mt-2">
            <div class="card">
                <div class="card-body">
                    <button @click.prevent="cartStore.completeOrder()" class="btn btn-success" :disabled="cartStore.data.items.length === 0" >Finalizar pedido por ${{ cartStore.data.total.toFixed(2) }}</button>
                </div>
            </div>
        </div>

        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <strong class="me-auto">pedido realizado</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    {{ cartStore.message }}
                </div>
            </div>
        </div>

    </div>
</template>