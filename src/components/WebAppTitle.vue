<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="title">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 900;
  font-size: 8vw;
  top: -10px;
  color: #80DEAC;
  text-shadow: 0px 6px 9px black;
}

.title h1 {
  display: flex;
  text-align: center;
}

@media (min-width: 1024px) {
  .title {
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 5vw;
  }
}
</style>
