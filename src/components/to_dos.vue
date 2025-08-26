<template>
    <div class="card-todo">
        <div v-if="todo.completed == true" class="todo-t">
            <h3>{{ todo.title }}</h3>
        </div>
        <div v-else class="todo-f">
            <h3>{{ todo.title }}</h3>
        </div>
        <span class="view-more">Voir plus</span>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object
        }
    }
}
</script>

<style>
.card-todo {
    padding: 17px;
    border: 1px solid gray;
    border-radius: 8px;
}
.todo-t {
    color: #1175b8;
    margin-bottom: 12px;
}
.todo-f {
    margin-bottom: 12px;
}
.view-more {
    color: red;
}
</style>