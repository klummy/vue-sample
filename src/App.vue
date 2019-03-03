<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from '@/pages/Home.vue';

@Component({
  components: {
    Home,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./styles/normalize.css";

:root {
  --page-width: 1600px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

a {
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
}
</style>
