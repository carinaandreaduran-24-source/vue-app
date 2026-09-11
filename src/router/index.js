import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdmissionsView from '../views/AdmissionsView.vue'
import SampleData from '../views/SampleData.vue'
import SampleMethods from '../views/SampleMethods.vue'
import SampleVmodel from '../views/SampleVmodel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admissions',
      name: 'admissions',
      component: AdmissionsView
    },
    {
      path: '/sample-data',
      name: 'sampleData',
      component: SampleData
    },
    {
      path: '/sample-methods',
      name: 'sampleMethods',
      component: SampleMethods
    },
    {
      path: '/sample-vmodel',
      name: '/sampleVmodel',
      component: SampleVmodel
    }
  ]
})

export default router