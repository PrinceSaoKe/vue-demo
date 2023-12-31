<script setup>
import { ref } from 'vue';
const value = ref(new Date())
</script>

<template>
    <el-calendar v-model="value" />
</template>

<style>
.el-calendar-table .el-calendar-day {
    height: 50px;
}
</style>