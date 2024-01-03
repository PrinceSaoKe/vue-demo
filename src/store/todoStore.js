import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
    state() {
        return {
            Prince: [
                { id: 1, finished: false, content: '复习操作系统', createTime: '2023/12/17 22:54', finishTime: '2023/12/19 23:59' },
                { id: 2, finished: false, content: '学习前端芝士', createTime: '2023/12/17 22:54', finishTime: '2023/12/25 23:59' },
                { id: 3, finished: false, content: '复习信息论', createTime: '2023/12/17 22:54', finishTime: null },
                { id: 4, finished: false, content: '复习网络程序设计', createTime: '2023/12/17 22:54', finishTime: null },
                { id: 5, finished: false, content: '复习通信原理', createTime: '2023/12/17 22:54', finishTime: null },
            ],
        }
    },
})
