import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
    state() {
        return {}
    },
    persist: true,
})
