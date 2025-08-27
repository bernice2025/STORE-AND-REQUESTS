<template>
    <div class="card-list">
        <!-- <ul>
            <li>id: {{ user.id }}</li>
            <li>Name: {{ user.name }}</li>
            <li>Username: {{ user.username }}</li>
            <li>Email: {{ user.email }}</li>
        </ul> -->

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>CITY</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in $store.state.users.slice(0, 2)">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.address.city }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['user']
}
</script>

<style>
/* .card-list {
  padding: 12px;
  border: 1px solid gray;
  border-radius: 8px;
} */

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