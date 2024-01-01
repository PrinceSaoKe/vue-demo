import { defineStore } from 'pinia'; // 从pinia中导入，defineStore方法，用于定义一个新的store
export const useProfileStore = defineStore('profile', { // 使用defineStore方法定义store
    state() { // state表示这个store里的状态，也就是存放数据的地方
        return {
            username: 'yqryqr', // 这里我们定义了一个数据叫userName，用于存放我们的用户名 
            email: '2596818595@qq.com',
        }
    },
})
