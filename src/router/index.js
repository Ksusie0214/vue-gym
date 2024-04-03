import { createRouter, createWebHistory } from 'vue-router'
import PaymentView from '../views/PaymentView.vue'
import trainerEnrollView from '../views/trainerEnrollView.vue'
import MemberListView from '@/views/MemberListView.vue'
import JoinOkView from '@/views/JoinOkView.vue'
import ManagerView from '@/views/ManagerView.vue'

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
  },
  {
    path: '/joinok',
    name: 'joinokview',
    component: JoinOkView
  },
  {
    path: '/manager',
    name: 'managerView',
    component: ManagerView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
