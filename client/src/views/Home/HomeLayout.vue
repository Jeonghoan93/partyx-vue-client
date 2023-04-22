<template>
  <div class="app-layout">
    <Navbar />
    <main>
      <router-view />
    </main>
    <footer>
      <!-- footer contents -->
    </footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Navbar from "./components/Navbar.vue";

  export default defineComponent({
    name: "HomeLayout",
    components: {
      Navbar,
    },
  });
</script>

<style scoped>
  .app-layout {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;

    margin: 0 auto;
  }

  main {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    main {
      padding: 1rem 0.5rem;
    }
  }
</style>
