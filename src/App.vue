<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Title from './components/WebAppTitle.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Title msg="Joke Generator-3000" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap');

header {
  line-height: 1.5;
  max-height: 100vh;
  font-family: 'Irish Grover', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    justify-self: center;
  }
}
</style>
