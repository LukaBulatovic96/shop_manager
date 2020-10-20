/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';

const routes = [
  {
    path: '/termins',
    name: 'Termins',
      component: () => import('../views/Termins.vue')
  },
  {
    path: '/clients',
    name: 'Clients',
      component: () => import('../views/Clients.vue')
  },
  {
    path: '/treatmans',
    name: 'Treatmans',
      component: () => import('../views/Treatmans.vue')
  },
  {
    path: '/items',
    name: 'Items',
    component: () => import('../views/Items.vue')


  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login.vue'),
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/Register.vue'),
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import( '../views/Profile.vue'),
    meta:{
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/termins');
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router;
/* eslint-enable no-unused-vars */
