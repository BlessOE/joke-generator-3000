<template>
  <div class="joke">
    <h3>
      <slot name="heading"></slot>
    </h3>
    <slot></slot>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

.joke {
  color: white;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-family: 'Josefin Sans';
  font-size: 5vw;
  text-align: center;
  padding: 0px 10px;
  line-height: 5vw;
}

h3 {
  font-weight: bold;
  margin-bottom: 0.4rem;
  color: white;
}

@media (min-width: 1024px) {
  .joke {
    padding: 0.4rem 0 1rem 0;
    font-size: 3vw;
    padding: 0;
  }
}
</style>
