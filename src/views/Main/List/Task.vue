<script setup>
import { createTodo, readTodo } from "@/api/api.js";
import { useProfileStore } from '@/store/profileStore.js';
import { Select } from '@element-plus/icons-vue';
import { ref } from "vue";

const props = defineProps(['date'])

const profileStore = useProfileStore()

const todoContent = ref('')

function addTodo() {
    createTodo(profileStore.userId, todoContent.value, props.date).then((res) => {
        console.log(res.data)
        readTodo(profileStore.userId).then((res) => {
            console.log(res.data)
        })
    })
}
</script>

<template>
    <span class="title_span">
        <span class="title">Task</span>
        <el-button type="primary" :icon="Select" color="#DDEBDB" @click="addTodo">添加至待办</el-button>
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