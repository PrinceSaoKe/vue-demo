<script setup>
import { useProfileStore } from '@/store/profileStore.js';
import { useTodoStore } from '@/store/todoStore.js';
import { reactive, ref } from "vue";

const props = defineProps(['searchStr', 'date'])

const todoStore = useTodoStore()
const profileStore = useProfileStore()

const showDialogRef = ref(false)

const updateRow = reactive({
    id: null,
    content: null,
})

function getData() {
    let data1 = []   // 存放的待办事项
    const data2 = []   // 存放日期符合且内容符合的待办事项

    // 筛选日期符合的待办事项
    if (props.date === null) {
        data1 = todoStore[profileStore['username']]
    } else {
        const year = props.date.getFullYear()
        const month = props.date.getMonth()
        const day = props.date.getDay()

        todoStore[profileStore['username']].forEach(element => {
            const time = new Date(Date.parse(element.finishTime))
            if (time.getFullYear() === year && time.getMonth() === month && time.getDay() === day) {
                data1.push(element)
            }
        });
    }

    // 筛选内容符合搜索的待办事项
    if (props.searchStr === '') {
        return data1    // 无搜索内容则直接返回data1
    } else {
        data1.forEach(element => {
            if (element.content === props.searchStr) {
                data2.push(element)
            }
        });
        return data2
    }
}

function finish(index, row) {
    for (const i of todoStore[profileStore['username']]) {
        if (i['id'] === row.id) {
            i['finished'] = true
            return
        }
    }
}

function showDialog(index, row) {
    updateRow.id = row.id
    updateRow.content = row.content
    showDialogRef.value = true
}

function updateData() {
    for (const i of todoStore[profileStore['username']]) {
        if (i['id'] === updateRow['id']) {
            i['content'] = updateRow['content']
            showDialogRef.value = false
            return
        }
    }
}

function deleteData(index, row) {
    todoStore[profileStore['username']].forEach((item, index, array) => {
        if (item.id === row.id) {
            array.splice(index, 1)
            return
        }
    });
}
</script>

<template>
    <el-table :data="getData()" :border="true">
        <el-table-column label="序号" prop="id" width="100" align="center" />
        <el-table-column label="内容" prop="content" align="center" />
        <el-table-column label="创建时间" prop="createTime" align="center" />
        <el-table-column label="完成时间" prop="finishTime" align="center" />
        <el-table-column label="操作" fixed="right" align="center">
            <template #default="scope">
                <el-button color="#FFB800" v-if="scope.row.finished" style="color: white;" disabled>已完成</el-button>
                <el-button color="#426440" @click="finish(scope.$index, scope.row)" v-if="!scope.row.finished">
                    完成
                </el-button>
                <el-button color="#419ADA" v-if="!scope.row.finished" style="color: white;"
                    @click="showDialog(scope.$index, scope.row)">
                    修改
                </el-button>
                <el-button color="#F81D1D" @click="deleteData(scope.$index, scope.row)">
                    删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-dialog v-model="showDialogRef">
        <el-input type="text" v-model="updateRow['content']"></el-input>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showDialogRef = false">取消</el-button>
                <el-button type="primary" @click="updateData()">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>