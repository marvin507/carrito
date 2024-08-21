<script setup>

import { useOrdersStore } from '@/stores/orders'
import { onMounted } from 'vue'
import moment from 'moment'
import { RouterLink } from 'vue-router';

const ordersStore = useOrdersStore()

onMounted(() => {
    ordersStore.getOrders()
})

</script>
<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Pedidos</h5>
                    <p class="card-text">Listado de pedidos</p>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Total</th>
                                <th scope="col">Ver</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in ordersStore.orders" :key="product.id">
                                <th scope="row">{{ product.order_number }}</th>
                                <td>{{ product.user.name }}</td>
                                <td>{{ moment(product.created_at).format('LL') }}</td>
                                <td>${{ product.total.toFixed(2) }}</td>
                                <td>
                                    <RouterLink title="ver" :to="{ name: 'order', params: { id: product.id } }"
                                        class="btn btn-link"><i class="bi bi-eye"></i></RouterLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>