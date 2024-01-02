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

.el-calendar {
    --el-calendar-selected-bg-color: #DDEBDB
}

.el-calendar-table td.is-today {
    color: #000
}
</style>