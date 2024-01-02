import { defineStore } from 'pinia';

// 使用defineStore定义一个store
export const useProfileStore = defineStore('profile', {
    // state表示这个store里的状态，也就是存放数据的地方
    state() {
        return {
            username: '',
            email: '',
        }
    },
})
