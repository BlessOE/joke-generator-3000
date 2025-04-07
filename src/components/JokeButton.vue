<script lang="ts">
    export default {
        data() {
            return {
                txt: "Reveal",
            };
        },
        methods: {
            nextStep() {
                if (this.txt === 'Reveal') {
                    this.txt = 'Next Joke'
                    this.$emit('btnClicked', this.txt)
                }
                else {
                    this.txt = 'Reveal'
                    this.$emit('btnClicked', this.txt)
                }
            }
        }
    };
</script>

<template>
  <div class="item">
      <button v-on:click="nextStep" class="btn">{{ txt }}</button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

.item {
  margin-top: 4.5vw;
  display: flex;
  position: relative;
  justify-content: center;
  font-family: 'Josefin Sans';
}

.btn {
  padding: 2vw 15vw;
  border-radius: 100px;
  font-weight: bold;
  font-size: 50px;
  background-color: #80DEAC;
  color: #173131;
  font-size: 5vw;
  border: none;
  box-shadow: 4px 6px 15px 2px black;
}

.btn:active {
    background-color: #50af7d;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 2rem;
    display: flex;
    position: relative;
    justify-content: center;
  }

  .btn {
    font-size: 3vw;
  }
}
</style>
