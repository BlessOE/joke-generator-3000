<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="title">
      <h1 class="green">Joke Generator-3000</h1>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-weight: 900;
  font-size: 8vw;
  top: -10px;
  color: #80DEAC;
  text-shadow: 0px 6px 9px black;
  margin: 0;
}

@media (min-width: 1024px) {
  h1 {
    font-size: 5vw;
  }
}
</style>
