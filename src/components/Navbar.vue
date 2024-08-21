<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const cartStore = useCartStore()

</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Carrito</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink activeClass="active" class="nav-link" aria-current="page" :to="{ name: 'products' }">Productos</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink activeClass="active" class="nav-link" aria-current="page" :to="{ name: 'orders' }">Pedidos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink activeClass="active" class="nav-link position-relative" aria-current="page" :to="{ name: 'cart' }">Carrito <i
                class="bi bi-cart"></i>
              <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                {{ cartStore.data.items.length }}
                <span class="visually-hidden">unread messages</span>
              </span>

            </RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#" @click.prevent="authStore.logout()" >Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>