<template>
  <main>
    <div>
      <div class="flex mb-4">
        <h2>Posts</h2>
        <button>
          <router-link to="/posts">View more</router-link>
        </button>
      </div>
      <div class="grid">
        <Postcard v-for="post in $store.state.posts.slice(0, 6)" :post="post"/>
      </div>
    </div>

    <div class="container">
      <div>
        <div class="flex mb-4">
          <h2>Users</h2>
          <button>
            <router-link to="/users">View more</router-link>
          </button>
        </div>
        <div class="grid-users">
          <user_table />
        </div>
      </div>
      <div>
        <div class="flex mb-4">
          <h2>Todos</h2>
          <button>
            <router-link to="/todos">View more</router-link>
          </button>
        </div>
        <div class="grid-todos">
          <Todos v-for="todo in $store.state.todos.slice(0, 4)" :todo="todo"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import post_card from '@/components/post_card.vue';
import user_table from '@/components/user_table.vue';
import Todos from '@/components/to_dos.vue'
import axios from 'axios';
export default {
    components: {
      Postcard: post_card,
      user_table,
      Todos
    },
    methods: {
      getposts() {
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          this.$store.state.posts = response.data
        })
        .catch(err => {
          console.log('REQUEST ERROR : ', err)
        })
      },
      getusers() {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          this.$store.state.users = response.data
        })
        .catch((err) => {
          console.log("REQUEST ERROR : ", err)
        })
      },
      gettodos() {
        axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          this.$store.state.todos = response.data
        })
        .catch((err) => {
          console.log("REQUEST ERROR : ", err)
        })
      }
    },
    mounted() {
      this.getposts();
      this.getusers();
      this.gettodos()
    }
}
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 32px;
  gap: 10px;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mb-4 {
  margin-bottom: 16px;
}
.grid-users {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
}
.grid-todos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
</style>