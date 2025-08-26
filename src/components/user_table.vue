<template>
    <div class="card-list">
        <ul>
            <li>id: {{ user.id }}</li>
            <li>Name: {{ user.name }}</li>
            <li>Username: {{ user.username }}</li>
            <li>Email: {{ user.email }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['user']
}
</script>

<style>
.card-list {
  padding: 12px;
  border: 1px solid gray;
  border-radius: 8px;
}
</style>