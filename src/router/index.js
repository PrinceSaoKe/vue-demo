import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home', redirect: '/home/list', component: () => import('@/views/Main.vue'), children: [
            { path: 'list', name: 'list', component: () => import('@/views/TodoList.vue') },
            { path: 'table', name: 'table', component: () => import('@/views/TodoList.vue') },
        ]
    },
    {
        path: '/auth', redirect: '/auth/login', children: [
            { path: 'login', name: 'login', component: () => import('@/views/Login.vue') },
            { path: 'register', name: 'register', component: () => import('@/views/Login.vue') },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
