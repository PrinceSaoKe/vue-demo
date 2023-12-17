<script setup>
import { Select } from '@element-plus/icons-vue';
</script>

<template>
    <span class="title_span">
        <span class="title">Task</span>
        <el-button type="primary" :icon="Select" color="#DDEBDB">添加至待办</el-button>
    </span>
    <el-input type="textarea" rows="6"></el-input>
</template>

<style>
.title_span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 1rem 0;
}
</style>