import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../page/admin.vue'
import My from '../page/my.vue'
const routes = [
  {
    path: '/',
    component: Admin
  },
  {
    path: '/my',
    name: 'admin',
    component: My,
    chidren: []
  },
  {
    path: '/incomes'
  },
  {
    path: '/expenses'
  },
  {
    path: '/budgets'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router