import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TemplateSyntax from '../views/TemplateSyntax.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/template-syntax',
      name: 'template-syntax',
      component: TemplateSyntax,
    },
  ],
})

export default router
