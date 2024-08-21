<script setup>

import { useOrdersStore } from '@/stores/orders'
import { onMounted } from 'vue'
const ordersStore = useOrdersStore()

onMounted(() => {
    ordersStore.getOrder()
})

</script>
<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Numero de pedido: {{ ordersStore.order.order_number }}</h5>
                    <h5 class="card-title">Cliente: {{ ordersStore.order.user.name }}</h5>
                    <h5 class="card-title">Total: {{ ordersStore.order.total }}</h5>
                    <p class="card-text">Listado de pedidos</p>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in ordersStore.order.order_details" :key="product.id">
                                <th scope="row">{{ product.id }}</th>
                                <td>{{ product.product.name }}</td>
                                <td>{{ product.quantity }}</td>
                                <td>{{ product.quantity * product.price.toFixed(2) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>