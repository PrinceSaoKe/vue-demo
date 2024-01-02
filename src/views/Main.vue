<script setup>
import { useProfileStore } from '@/store/profileStore.js';
import { onMounted, ref } from "vue";

const profileStore = useProfileStore()

const authRef = ref(false)

onMounted(() => {
    authRef.value = profileStore.username !== ''
})
</script>

<template>
    <el-container>
        <el-header class="header">
            <el-menu mode="horizontal" default-active=/home/list background-color="#DDEBDB" :ellipsis="false"
                active-text-color="#456442" text-color="#456442" :router="true">
                <el-menu-item index="/home/list">TodoList</el-menu-item>
                <el-menu-item index="/home/table">表格展示</el-menu-item>
                <div class="menu-flex-grow"></div>
                <el-menu-item index="/auth/login" v-if="authRef">{{ profileStore.email }}</el-menu-item>
                <el-menu-item index="/auth/login">{{ authRef ? '退出' : '登录' }}</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<style>
.header {
    background-color: #DDEBDB;
}

.menu-flex-grow {
    flex-grow: 1;
}

.el-menu {
    width: 100%;
}
</style>