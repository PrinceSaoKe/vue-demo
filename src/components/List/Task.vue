<script setup>
import { useProfileStore } from '@/store/profileStore.js';
import { useTodoStore } from '@/store/todoStore.js';
import { Select } from '@element-plus/icons-vue';
import { ref } from "vue";

const todoStore = useTodoStore()
const profileStore = useProfileStore()

const todoContent = ref('')

function addData() {
    const id = todoStore[profileStore['username']].length + 1
    const data = {
        id: id,
        content: todoContent.value,
        createTime: new Date(),
        finishTime: new Date(),
    }
    todoStore[profileStore['username']].push(data)
}
</script>

<template>
    <span class="title_span">
        <span class="title">Task</span>
        <el-button type="primary" :icon="Select" color="#DDEBDB" @click="addData">添加至待办</el-button>
    </span>
    <el-input type="textarea" rows="6" v-model="todoContent"></el-input>
</template>

<style>
.title_span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 1rem 0;
}
</style>