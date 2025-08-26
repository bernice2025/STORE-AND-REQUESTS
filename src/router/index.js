import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/Posts.vue')
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/Todos.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/Users.vue')
    },
    {
      path: '/user/:id',
      name: 'userDetails-id',
      component: () => import('../views/usersDetails.vue')
    }
  ],
})

export default router
