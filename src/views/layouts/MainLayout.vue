<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '../../components/Navbar.vue'
</script>

<template>
  <Navbar />
  
  <main>
    <div class="container mt-5">
      <RouterView />
    </div>
  </main>
</template>