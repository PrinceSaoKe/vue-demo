import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home', redirect: '/home/list', component: () => import('@/views/Main/Main.vue'), children: [
            { path: 'list', name: 'list', component: () => import('@/views/Main/List/List.vue') },
            { path: 'table', name: 'table', component: () => import('@/views/Main/Table/Table.vue') },
        ]
    },
    {
        path: '/auth', redirect: '/auth/login', component: () => import('@/views/Auth/Auth.vue'), children: [
            { path: 'login', name: 'login', component: () => import('@/views/Auth/LoginForm.vue') },
            { path: 'register', name: 'register', component: () => import('@/views/Auth/RegisterForm.vue') },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
