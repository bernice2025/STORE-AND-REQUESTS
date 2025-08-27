<template>
    <main>
        <h1 class="mb-4">Users</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>CITY</th>
                        <th>PHONE</th>
                        <th>WEBSITE</th>
                        <th>COMPANY</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in $store.state.users" :key="user">
                        <td>{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.address.city }}</td>
                        <td>{{ user.phone }}</td>
                        <td>
                            <a :href="'http://' + user.website " target="_blank">View</a>
                        </td>
                        <td>{{ user.company.name }}</td>
                        <td class="bouton">
                            <button @click="$router.push({ name: 'userDetails-id', params: {id: user.id} })">View Details</button>
                            <button @click="modifier">Modify</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
import post_card from '@/components/post_card.vue';
import axios from 'axios';
export default {
    components: {
        Postcard: post_card
    },
    
    methods: {
        getusersDetails() {
            axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.$store.state.users = response.data
            })
            .catch((err) => {
                console.log("REQUEST ERROR : ", err)
            })
        }
    },
    mounted() {
        this.getusersDetails()
    }
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
}
th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
}
thead {
    background-color: #f5f5f5;
}
tr:hover {
  background-color: #f9f9f9;
}
a {
  color: #007bff;
  text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
.bouton {
    display: flex; 
    flex-direction: column;
    gap: 5px;
}
</style>