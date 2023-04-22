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
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

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
