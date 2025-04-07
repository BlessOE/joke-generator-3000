<script setup lang="ts">
import Joke from '../components/Joke.vue';
import NewJokeButton from '../components/JokeButton.vue';
import JokeItem from '../server/JokeItem.vue';
import axios from 'axios';
</script>

<template>
  <main>
    <Joke :state="currentText" />
    <NewJokeButton @click="toggleText" />
  </main>
</template>

<script lang="ts">
//import { fetchJokes } from '../server/Server.ts';
const API_URL = "http://localhost:7000/api/getnewjoke";

export default {
  components: {
    NewJokeButton,
    Joke,
  },
  data() {
    return {
      jokes: [] as string[],
      currentTextIndex: 0,
      /**isTextPt1: true, */
    };
  },
  computed: {
    currentText() {
      return this.jokes[this.currentTextIndex];
    },
  },
  methods: {
    async fetchJoke() {
      try {
        const response = axios.get<JokeItem[]>(API_URL);

        // check if response data is an array and has elements
        if (Array.isArray((await response).data) && (await response).data.length > 0) {
          // map response data to extract pt1 & pt2
          this.jokes = (await response).data.flatMap(item => [item.pt1, item.pt2]);
        } else {
          console.error(`Uncexpected response structure: ${(await response).data}`)
        }
      } catch (err) {
        console.error(`Error fetching jokes: ${err}`);
      }
    },
    toggleText () {
      this.currentTextIndex = (this.currentTextIndex + 1) % this.jokes.length
    },
  },
  mounted() {
    this.fetchJoke();
  }
};
</script>
