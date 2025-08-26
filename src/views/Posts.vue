<template>
    <main>
        <h1 class="mb-4">Posts</h1>
        <div class="grid">
            <Postcard v-for="post in $store.state.posts" :post="post"/>
        </div>
    </main>
</template>

<script>
import post_card from '@/components/post_card.vue';
export default {
    components: {
        Postcard: post_card
    }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.mb-4 {
  margin-bottom: 16px;
}
</style>