<template>
  <div>
    <div class="app-layout">
      <NavbarMain />
      <main>
        <router-view />
      </main>
      <FooterMobile />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import NavbarMain from "./Navbar.vue";
  import FooterMobile from "./Footer.vue";

  export default defineComponent({
    name: "MainLayout",
    components: {
      NavbarMain,
      FooterMobile,
    },
    setup() {},
  });
</script>

<style scoped>
  .app-layout {
    background-color: rgb(33, 33, 33);
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
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
