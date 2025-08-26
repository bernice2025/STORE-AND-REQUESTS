<template>
    <div class="card">
        <h3 class="title">{{ post.title }}</h3>
        <p class="body">{{ post.body.slice(0, 50) }}</p>
        <span class="view-more">Voir plus</span>
    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style scoped>
.card {
  padding: 12px;
  border: 1px solid gray;
  border-radius: 8px;
}
.title {
  color: #4caf50;
  margin-bottom: 12px;
}
.body {
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 8px;
}

.view-more {
  color: crimson;
}
</style>