<template>
    <main>
        <h1 class="mb4">Todos</h1>
        <div class="grid-todos">
           <to_dos v-for="todo in $store.state.todos" :todo="todo"/> 
        </div>
    </main>
</template>

<script>
import to_dos from '@/components/to_dos.vue';
export default {
    components: {
        to_dos
    }
}
</script>

<style scoped>
.grid-todos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}
.mb4 {
    margin-bottom: 16px;
}
</style>