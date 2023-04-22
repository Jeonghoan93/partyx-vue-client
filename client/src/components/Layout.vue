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

  import NavbarMain from "../views/Main/components/NavbarMain.vue";
  import FooterSmallMain from "../views/Main/components/FooterSmallMain.vue";
  import FooterBigMain from "../views/Main/components/FooterBigMain.vue";

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
  }
</style>
