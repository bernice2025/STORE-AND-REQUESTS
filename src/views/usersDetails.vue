<template>
    <div>
        <div class="mb4">
            <h1>Personal Information</h1>
            <p>Name: {{ foundUser.name }}</p>
            <p>Username: {{ foundUser.username }}</p>
            <p>Email: {{ foundUser.email }}</p>
        </div>
        <div class="mb4">
            <h1>Addition Information</h1>
            <p>Address: {{ foundUser.address.city }}</p>
            <p>Phone: {{ foundUser.phone }}</p>
            <p>Website: {{ foundUser.website }}</p>
            <p>Company: {{ foundUser.company.name }}</p>
        </div>
        <div>
            <router-link to="/users"><</router-link>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        foundUser() {
            return this.$store.state.users.find((user) => user.id === parseInt(this.$route.params.id))
        }
    }
}
</script>

<style>
.mb4 {
    margin-bottom: 25px;
}
h1 {
    margin-bottom: 15px;
}
p {
    margin-bottom: 9px;
}
</style>