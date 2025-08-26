<script></script>

<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
div {
  max-width: 800px;
  margin-left: 20%;
  padding-block: 24px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
nav {
  margin-bottom: 24px;
  display: flex;
  gap: 10px;
}
</style>
