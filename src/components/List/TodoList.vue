<script setup>
import { useProfileStore } from '@/store/profileStore.js';
import { useTodoStore } from '@/store/todoStore.js';
import { Search } from '@element-plus/icons-vue';

const todoStore = useTodoStore()
const profileStore = useProfileStore()
</script>

<template>
    <span class="title_span">
        <span class="title">待办</span>
        <el-icon size="26px">
            <Search />
        </el-icon>
    </span>
    <div v-for="data in todoStore[profileStore['username']]">
        <div class="card_margin">
            <el-card shadow="hover" body-class="card">
                <el-checkbox class="checkbox"></el-checkbox>
                {{ data.content }}
            </el-card>
        </div>
    </div>
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