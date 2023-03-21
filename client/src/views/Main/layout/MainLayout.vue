<template>
  <div>
    <div class="app-layout">
      <NavbarMain />
      <main>
        <router-view />
      </main>
    </div>
    <FooterMain />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import NavbarMain from "../components/Navbar.vue";
  import FooterMain from "../components/Footer.vue";

  export default defineComponent({
    name: "MainLayout",
    components: {
      NavbarMain,
      FooterMain,
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
      url("../assets/bg.jpeg");
    margin: 0 auto;
  }

  main {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    main {
      padding: 1rem 0.5rem;
    }
  } ;
</style>
