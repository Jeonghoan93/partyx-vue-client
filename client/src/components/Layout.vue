<template>
  <div class="app-layout">
    <NavbarMain />
    <main>
      <router-view />
    </main>
    <FooterMobile />
    <FooterBig />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import NavbarMain from "./Navbar.vue";
  import FooterMobile from "./FooterMobile.vue";
  import FooterBig from "./FooterBig.vue";

  export default defineComponent({
    name: "MainLayout",
    components: {
      NavbarMain,
      FooterMobile,
      FooterBig,
    },
    setup() {},
  });
</script>

<style scoped>
  .app-layout {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    margin: 0 auto;
    background-color: rgb(28, 27, 27);
  }
</style>
