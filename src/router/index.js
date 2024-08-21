import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/layouts/MainLayout.vue'),
      children: [
        {
          path: '/',
          name: 'products',
          component: () => import('../views/Products.vue')
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('../views/Cart.vue')
        },
        {
          path: '/orders',
          name: 'orders',
          component: () => import('../views/Orders.vue')
        },
        {
          path: '/orders/:id',
          name: 'order',
          component: () => import('../views/Details.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }
  ]
})

export default router
