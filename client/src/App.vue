<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
  export default {
    name: "App",
  };
</script>

<style>
  html,
  body {
    font-family: "Cereal", sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }
</style>
