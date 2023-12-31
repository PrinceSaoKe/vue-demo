import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home', redirect: '/home/list', component: () => import('@/views/Main.vue'), children: [
            { path: 'list', name: 'list', component: () => import('@/components/List/List.vue') },
            { path: 'table', name: 'table', component: () => import('@/components/List/List.vue') },
        ]
    },
    {
        path: '/auth', redirect: '/auth/login', component: () => import('@/views/Auth.vue'), children: [
            { path: 'login', name: 'login', component: () => import('@/components/LoginForm.vue') },
            { path: 'register', name: 'register', component: () => import('@/components/RegisterForm.vue') },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
