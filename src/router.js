import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
  { path: '/sobre', name: 'About', component: () => import('./views/About.vue') },
  { path: '/servicos', name: 'Services', component: () => import('./views/Services.vue') },
  { path: '/equipe', name: 'Team', component: () => import('./views/Team.vue') },
  { path: '/agendar', name: 'Schedule', component: () => import('./views/Schedule.vue') },
  { path: '/contato', name: 'Contact', component: () => import('./views/Contact.vue') },
  { path: '/faq', name: 'Faq', component: () => import('./views/Faq.vue') },
  { path: '/privacidade', name: 'Privacy', component: () => import('./views/Privacy.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('./views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

export default router