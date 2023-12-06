import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import Signup from '../views/pages/signup.vue'
import Login from '../views/pages/login.vue'
import Products from '../views/pages/products.vue'
import About from '../views/pages/about.vue'
import Contact from '../views/pages/contact.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
