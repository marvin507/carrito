<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

</script>
<template>
<div class="">
    <main class="form-signin w-100 m-auto mt-5">
        <form @submit.prevent="authStore.login">
            <!-- <img class="mb-4" src="" alt="" width="72" height="57"> -->
            <h1 class="h3 mb-3 fw-normal">Ingrese sus credenciales</h1>

            <div class="form-floating">
                <input type="email" v-model="authStore.credentials.email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating">
                <input type="password" v-model="authStore.credentials.password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>

            <button class="btn btn-success w-100 py-2" type="submit">Iniciar sesión</button>
        </form>
    </main>
</div>
</template>
<style lang="css">
@import url('https://getbootstrap.com/docs/5.3/examples/sign-in/sign-in.css');
</style>