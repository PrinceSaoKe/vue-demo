<script setup>
import Calendar from './Calendar.vue';
import Task from './Task.vue';
import TodoList from './TodoList.vue';
</script>

<template>
    <div class="span">
        <div class="half">
            <Calendar class="left_part"></Calendar>
            <div class="left_part">
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

.left_part {
    width: 90%;
}
</style>