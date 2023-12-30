<script setup>
</script>

<template>
    <el-container>
        <el-header class="header">
            <ul class="nav">
                <router-link to="/home" class="router_link">TodoList</router-link>
                <router-link to="/home" class="router_link">表格展示</router-link>
            </ul>
            <ul class="nav">
                <p>2596818595@qq.com</p>
                <router-link to="/auth/login" class="router_link">退出</router-link>
            </ul>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<style>
.header {
    background-color: #DDEBDB;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

ul {
    margin: 0;
    padding: 0;
}

.nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.router_link {
    color: #11240E;
    text-decoration: none;
    font-weight: 500;
    margin: 0 1rem 0 1rem;
    transition: 0.3s;
}

.router_link:hover {
    font-weight: 800;
}
</style>