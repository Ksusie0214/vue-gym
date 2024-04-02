import { createRouter, createWebHistory } from 'vue-router'
import PaymentView from '../views/PaymentView.vue'
import trainerEnrollView from '../views/trainerEnrollView.vue'
import MemberListView from '@/views/MemberListView.vue'

const routes = [
  {
    path: '/payment',
    name: 'paymentView',
    component: PaymentView
  },
  {
    path: '/trainer/enroll',
    name: 'trainerEnrollView',
    component: trainerEnrollView
  },
  {
    path: '/list',
    name: 'memberList',
    component: MemberListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
