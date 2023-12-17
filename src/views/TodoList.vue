<script setup>
import Calendar from '../components/Calendar.vue';
import TodoList from '../components/TodoList.vue';
</script>

<template>
    <span class="column_grid">
        <div class="row_grid">
            <Calendar></Calendar>
            <p>Task</p>
        </div>
        <TodoList></TodoList>
    </span>
</template>

<style>
.column_grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.row_grid {
    display: grid;
    grid-template-rows: 3fr 2fr;
}
</style>