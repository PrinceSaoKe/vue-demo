<script setup>
import MyCalendar from '@/components/MyCalendar.vue';
import { Calendar, Search } from '@element-plus/icons-vue';
import { ref } from "vue";
import TodoTable from './TodoTable.vue';

const searchStrRef = ref('')
const dateRef = ref(null)
const showCalendarRef = ref(false)
const showSearchRef = ref(false)
const calendar = ref()

function setDate() {
    dateRef.value = calendar.value?.dateRef
    showCalendarRef.value = false
}
</script>

<template>
    <div class="table-container">
        <div class="table-title">
            <div class="title">待办事项</div>
            <el-icon size="26px">
                <Calendar @click="showCalendarRef = true" />
            </el-icon>
            <div class="searchbar_div">
                <el-icon size="26px">
                    <Search @click="showSearchRef = !showSearchRef" />
                </el-icon>
                <el-input placeholder="请输入要查找的内容" v-model="searchStrRef" v-if="showSearchRef"></el-input>
            </div>
        </div>
        <TodoTable :search-str="searchStrRef" :date="dateRef"></TodoTable>
    </div>
    <el-dialog v-model="showCalendarRef">
        <MyCalendar ref="calendar"></MyCalendar>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dateRef = null; showCalendarRef = false">显示全部</el-button>
                <el-button type="primary" @click="setDate">确定</el-button>
            </span>
        </template>
    </el-dialog>
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
    margin-right: 20px;
}

.table-title .el-icon:hover {
    cursor: pointer;
}

.searchbar_div {
    display: flex;
    align-items: center;
}
</style>