<script setup>
import { Search } from '@element-plus/icons-vue';
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
    <span class="title_span">
        <span class="title">待办</span>
        <el-icon size="26px">
            <Search />
        </el-icon>
    </span>
    <div v-for="data in datas">
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