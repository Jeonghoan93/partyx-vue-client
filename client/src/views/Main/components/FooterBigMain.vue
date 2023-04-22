<template>
  <footer class="footerScreenBig">
    <div class="footer-link">
      <div class="footer-container">
        <router-link to="/explore" class="router-link">Company</router-link>
        <router-link to="/" class="router-link">About</router-link>
        <router-link to="/" class="router-link">How it works</router-link>
        <router-link to="/" class="router-link">Download App</router-link>
      </div>
      <div class="footer-container">
        <router-link to="/" class="router-link">Company</router-link>
        <router-link to="/" class="router-link">About</router-link>
        <router-link to="/" class="router-link">How it works</router-link>
        <router-link to="/" class="router-link">Download App</router-link>
      </div>
      <div class="footer-container">
        <router-link to="/" class="router-link">Company</router-link>
        <router-link to="/" class="router-link">About</router-link>
        <router-link to="/" class="router-link">How it works</router-link>
        <router-link to="/" class="router-link">Download App</router-link>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { RouteLocationRaw, useRouter } from "vue-router";

  export default defineComponent({
    name: "FooterBigMain",
    setup() {
      const router = useRouter();
      const isMobile = window.innerWidth <= 743;

      const changePage = (path: RouteLocationRaw) => {
        router.push(path);
      };

      const isActive = (path: string) => {
        return router.currentRoute.value.path === path;
      };

      return { isMobile, changePage, isActive };
    },
  });
</script>

<style scoped>
  .footerScreenBig {
    display: flexbox;
    justify-content: center;
    align-items: center;
    color: aliceblue;
    background-color: black;
    padding: 2rem;
    gap: 3%;
    z-index: 99;
    flex-wrap: wrap;
  }
  .footer-link {
    display: flex;
    gap: 2rem;
    width: 100%;

    flex-wrap: wrap;
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .router-link {
    margin-top: 3px;
    text-decoration: none;
    border: none;
    font-size: 11pt;
    font-weight: 500;
    color: white;
    cursor: pointer;
  }
  @media (max-width: 744px) {
    .footerScreenBig {
      display: none;
    }
  }
</style>
