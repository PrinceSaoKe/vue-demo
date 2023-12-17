<script setup>
import Calendar from '../components/Calendar.vue';
import Task from '../components/Task.vue';
import TodoList from '../components/TodoList.vue';
</script>

<template>
    <div class="span">
        <div class="half">
            <Calendar class="left"></Calendar>
            <div class="left">
                <Task></Task>
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

.left {
    width: 90%;
}
</style>