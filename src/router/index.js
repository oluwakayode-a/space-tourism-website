import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: "/destination",
      name: 'destination',
      component: () => import('../views/Destination.vue')
    },
    {
      path: "/crew",
      name: "crew",
      component: () => import("../views/Crew.vue")
    },
    {
      path: "/technology",
      name: "technology",
      component: () => import("../views/Technology.vue")
    }
  ]
})

export default router
