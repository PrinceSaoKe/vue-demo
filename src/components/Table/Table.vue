<script setup>
import { Calendar, Search } from '@element-plus/icons-vue';
import TodoTable from './TodoTable.vue';
</script>

<template>
    <div class="table-container">
        <div class="table-title">
            <div class="title">待办事项</div>
            <el-icon size="26px">
                <Calendar />
            </el-icon>
            <el-icon size="26px">
                <Search />
            </el-icon>
        </div>
        <TodoTable></TodoTable>
    </div>
</template>

<style>
.table-container {
    padding: 30px 50px 0 50px;
}

.table-title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.table-title .title {
    padding-right: 60px;
}

.table-title .el-icon {
    padding-right: 20px;
}
</style>