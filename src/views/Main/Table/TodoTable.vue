<script setup>
import { deleteTodo, readTodo, updateTodo } from "@/api/api.js";
import { useProfileStore } from '@/store/profileStore.js';
import { onMounted, reactive, ref } from "vue";

const props = defineProps(['searchStr', 'date'])

const profileStore = useProfileStore()

const showDialogRef = ref(false)
const todoDataRef = ref([])

const updateRow = reactive({
    id: null,
    content: null,
})

function getData() {
    let data1 = []   // 存放日期符合的待办事项
    const data2 = []   // 存放日期符合且内容符合的待办事项

    // 筛选日期符合的待办事项
    if (props.date === null) {
        data1 = todoDataRef.value
    } else {
        const year = props.date.getFullYear()
        const month = props.date.getMonth()
        const day = props.date.getDay()

        todoDataRef.value.forEach(element => {
            const time = new Date(Date.parse(element.endTime))
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
    updateTodo(row.taskId, profileStore.userId).then((res) => {
        console.log(res.data)
        getTodoData()
    })
}

function showDialog(index, row) {
    updateRow.id = row.id
    updateRow.content = row.content
    showDialogRef.value = true
}

function updateData() {
    // for (const i of todoStore[profileStore['username']]) {
    //     if (i['id'] === updateRow['id']) {
    //         i['content'] = updateRow['content']
    //         showDialogRef.value = false
    //         return
    //     }
    // }
    showDialogRef.value = false
    alert('该接口暂未实现')
}

function deleteData(index, row) {
    deleteTodo(row.taskId, profileStore.userId).then((res) => {
        console.log(res.data)
        getTodoData()
    })
}

function getTodoData() {
    readTodo(profileStore.userId).then((res) => {
        console.log(res.data)
        todoDataRef.value = res.data.data.item
    })
}

onMounted(() => {
    getTodoData()
})
</script>

<template>
    <el-table :data="getData()" :border="true">
        <el-table-column label="序号" prop="taskId" width="100" align="center" />
        <el-table-column label="内容" prop="content" align="center" />
        <el-table-column label="创建时间" prop="startTime" align="center" />
        <el-table-column label="完成时间" prop="endTime" align="center" />
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