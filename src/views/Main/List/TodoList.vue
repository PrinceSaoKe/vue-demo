<script setup>
import { readTodo } from "@/api/api.js";
import { useProfileStore } from '@/store/profileStore.js';
import { Search } from '@element-plus/icons-vue';
import { onMounted, ref } from "vue";

const profileStore = useProfileStore()

const todoDataRef = ref([])

function getTodoData() {
    readTodo(profileStore.userId).then((res) => {
        console.log(res.data)
        todoDataRef.value = res.data.data.item
        console.log(todoDataRef.value)
    })
}

onMounted(() => {
    getTodoData()
})
</script>

<template>
    <span class="title_span">
        <span class="title">待办</span>
        <el-icon size="26px">
            <Search />
        </el-icon>
    </span>
    <div v-for="data in todoDataRef">
        <div class="card_margin">
            <el-card shadow="hover" body-class="card">
                {{ data.content }}
            </el-card>
        </div>
    </div>
    <el-result v-if="profileStore.username === null" icon="error" title="未登录"></el-result>
</template>

<style>
.title_span {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card {
    background-color: #DDEBDB;
}

.card_margin {
    margin: 1rem 0 1rem 0;
}

.checkbox {
    padding-right: 10px;
}
</style>