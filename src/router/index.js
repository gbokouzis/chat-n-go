import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../config/firebase'
import Chatroom from '../views/Chatroom.vue'

const requireAuth = (to, from, next) => {
    let user = auth.currentUser
    if (!user) {
        next({ name: 'Login' })
    } else {
        next()
    }
  }

const routes = [
    {
        path: '/',
        name: 'Chatroom',
        component: Chatroom,
        beforeEnter: requireAuth
    },
    // {
    //     path: '/chatroom/',
    //     name: 'Chatroom',
    //     component: Chatroom
    // },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Auth/Login.vue')
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/Auth/Signup.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router