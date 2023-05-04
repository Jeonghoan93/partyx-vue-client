<template>
  <div class="app-layout">
    <NavbarMain />
    <main>
      <router-view />
    </main>
    <FooterMobile />
    <FooterBig />
    <BottomModal v-model="showModal" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, provide, ref } from "vue";
  import BottomModal from "./BottomModal.vue";
  import NavbarMain from "./Navbar.vue";
  import FooterMobile from "./FooterMobile.vue";
  import FooterBig from "./FooterBig.vue";

  export default defineComponent({
    name: "MainLayout",
    components: {
      BottomModal,
      NavbarMain,
      FooterMobile,
      FooterBig,
    },
    setup() {
      const showModal = ref(false);

      provide("showModal", showModal);

      return {
        showModal,
      };
    },
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

  main {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    main {
      padding: 0.1rem 1rem;
    }
  }
</style>
