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
    name: "AuthLayout",
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
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url("../../assets/bgAuth.png");

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
