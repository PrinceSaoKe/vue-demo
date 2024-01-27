<script setup>
import MyCalendar from '@/components/MyCalendar.vue';
import { ref } from "vue";
import Task from './Task.vue';
import TodoList from './TodoList.vue';

const calendar = ref()
const dateRef = ref(new Date())

function setDate() {
    dateRef.value = calendar.value.dateRef
}
</script>

<template>
    <div class="span">
        <div class="half">
            <MyCalendar ref="calendar" @click="setDate" class="left_part"></MyCalendar>
            <div class="left_part">
                <Task :date="dateRef"></Task>
            </div>
        </div>
        <div class="half">
            <TodoList></TodoList>
        </div>
    </div>
</template>

<style>
.span {
    display: flex;
    padding: 0 2rem 0 2rem;
}

.half {
    width: 50%;
}

.left_part {
    width: 90%;
}
</style>