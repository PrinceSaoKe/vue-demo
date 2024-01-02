<script lang="ts" setup>
import { reactive } from "vue";

const datas = reactive([
    { content: '复习操作系统', createTime: '2023/12/17 22:54', finishTime: '2023/12/19 23:59' },
    { content: '学习前端芝士', createTime: '2023/12/17 22:54', finishTime: '2023/12/25 23:59' },
    { content: '学习前端芝士', createTime: '2023/12/17 22:54', finishTime: null },
    { content: '学习前端芝士', createTime: '2023/12/17 22:54', finishTime: null },
    { content: '学习前端芝士', createTime: '2023/12/17 22:54', finishTime: null },
    { content: '学习前端芝士', createTime: '2023/12/17 22:54', finishTime: null },
])
</script>

<template>
    <el-table :data="datas" :border="true">
        <el-table-column lable="内容" prop="content" />
        <el-table-column lable="创建时间" prop="createTime" />
        <el-table-column lable="完成时间" prop="finishTime" />
    </el-table>
</template>