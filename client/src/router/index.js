import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import ViewEmployee from '../components/ViewEmployee.vue'
import EmployeeAdd from '../components/EmployeeAdd.vue'
import EmployeeEdit from '@/components/EmployeeEdit.vue'

// Define routes
const routes = [
  { path: '/', name: 'dashboard', component: Dashboard },
  { path: '/:empid', name: 'view-employee', component: ViewEmployee },
  { path: '/new', name: 'new-employee',component: EmployeeAdd },
  { path: '/edit/:empid', name: 'edit-employee', component: EmployeeEdit }
]

// Create and configure the router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
