<template>
  <footer>
    <div v-if="isMobile" class="footerScreenSmall">
      <div
        class="icon"
        @click="changePage('/explore')"
        :class="{ active: isActive('/explore') }"
      >
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <p>Explore</p>
      </div>
      <div
        class="icon"
        @click="changePage('/wishlists')"
        :class="{ active: isActive('/wishlists') }"
      >
        <font-awesome-icon icon="fa-solid fa-heart" />
        <p>Wishlists</p>
      </div>
      <div
        class="icon"
        @click="changePage('/auth/login')"
        :class="{ active: isActive('/login') }"
      >
        <font-awesome-icon icon="fa-solid fa-user" />
        <p>Log in</p>
      </div>
    </div>
    <div class="footerScreenBig">
      <div class="footer-link">
        <div class="footer-container">
          <rotuer-link class="router-link">Company</rotuer-link>
          <rotuer-link class="router-link">About</rotuer-link>
          <rotuer-link class="router-link">How it works</rotuer-link>
          <rotuer-link class="router-link">Download App</rotuer-link>
        </div>
        <div class="footer-container">
          <rotuer-link class="router-link">Company</rotuer-link>
          <rotuer-link class="router-link">About</rotuer-link>
          <rotuer-link class="router-link">How it works</rotuer-link>
          <rotuer-link class="router-link">Download App</rotuer-link>
        </div>
        <div class="footer-container">
          <rotuer-link class="router-link">Company</rotuer-link>
          <rotuer-link class="router-link">About</rotuer-link>
          <rotuer-link class="router-link">How it works</rotuer-link>
          <rotuer-link class="router-link">Download App</rotuer-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { RouteLocationRaw, useRouter } from "vue-router";

  export default defineComponent({
    name: "FooterMain",
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
  .footerScreenSmall {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: rgba(30, 35, 35, 0.8);
    padding: 0;
    z-index: 99;
  }

  .icon {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(220, 210, 210);
    cursor: pointer;
    font-size: 9pt;
    font-weight: 500;
  }

  .icon.active {
    color: pink;
  }

  .icon.active {
    filter: brightness(0) saturate(100%) invert(86%) sepia(28%) saturate(5067%)
      hue-rotate(324deg) brightness(105%) contrast(104%);
  }

  @media (min-width: 744px) {
    .footerScreenSmall {
      display: none;
    }
  }

  /* Below is when the screen size is big  */
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
