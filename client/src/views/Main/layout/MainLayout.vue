<template>
  <div>
    <div class="app-layout">
      <NavbarMain />
      <main>
        <router-view />
      </main>
      <FooterSmallMain />
    </div>
    <FooterBigMain />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import NavbarMain from "../components/NavbarMain.vue";
  import FooterSmallMain from "../components/footers/FooterSmallMain.vue";
  import FooterBigMain from "../components/footers/FooterBigMain.vue";

  export default defineComponent({
    name: "MainLayout",
    components: {
      NavbarMain,
      FooterSmallMain,
      FooterBigMain,
    },
    setup() {},
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
  } ;
</style>
