<template>
  <footer v-show="!isMobile" class="footer">
    <div class="footerContainer">
      <div class="title">
        <p>© PartyX</p>
      </div>
    </div>
    <div class="footerContainer" @click="changePage('/clubs')">
      <div class="title">
        <p>Terms</p>
      </div>
    </div>
    <div class="footerContainer" @click="changePage('/festivals')">
      <div class="title">
        <p>Privacy</p>
      </div>
    </div>
    <div class="footerContainer" @click="changePage('/amateur')">
      <div class="title">
        <p>Careers</p>
      </div>
    </div>
    <div class="footerContainer" @click="changePage('/search')">
      <div class="title">
        <p>Mission</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent, onMounted, onUnmounted, ref } from "vue";
  import { RouteLocationRaw, useRouter } from "vue-router";

  export default defineComponent({
    name: "footerBig",
    setup() {
      const router = useRouter();
      const isMobile = ref(window.innerWidth <= 743);

      const changePage = (path: RouteLocationRaw) => {
        router.push(path);
      };

      const isActive = (path: string) => {
        return router.currentRoute.value.path === path;
      };

      const handleResize = () => {
        isMobile.value = window.innerWidth <= 743;
      };

      onMounted(() => {
        window.addEventListener("resize", handleResize);
      });

      onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });

      return { isMobile, changePage, isActive };
    },
  });
</script>

<style scoped>
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: rgba(30, 35, 35, 0.95);
    padding: 0;
    z-index: 99;
  }

  .footerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(234, 227, 227);
    font-weight: 400;
    cursor: pointer;
  }

  .title {
    font-size: 8pt;
  }
</style>
