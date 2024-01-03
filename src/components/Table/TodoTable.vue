<script lang="ts" setup>
import { useProfileStore } from '@/store/profileStore.js';
import { useTodoStore } from '@/store/todoStore.js';

const todoStore = useTodoStore()
const profileStore = useProfileStore()

function finish(row) {
    for (const i of todoStore[profileStore['username']]) {
        if (i['id'] === row.id) {
            i['finished'] = true
            return
        }
    }
}
</script>

<template>
    <el-table :data="todoStore[profileStore['username']]" :border="true">
        <el-table-column label="序号" prop="id" width="100" align="center" />
        <el-table-column label="内容" prop="content" align="center" />
        <el-table-column label="创建时间" prop="createTime" align="center" />
        <el-table-column label="完成时间" prop="finishTime" align="center" />
        <el-table-column label="操作" fixed="right" align="center">
            <el-button color="#426440">完成</el-button>
            <el-button color="#419ADA">修改</el-button>
            <el-button color="#F81D1D">删除</el-button>
        </el-table-column>
    </el-table>
</template>