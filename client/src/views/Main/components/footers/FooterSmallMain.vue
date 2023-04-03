<template>
  <footer v-if="isMobile" class="footerScreenSmall">
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
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { RouteLocationRaw, useRouter } from "vue-router";

  export default defineComponent({
    name: "FooterSmallMain",
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
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
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
    color: rgb(186, 180, 180);
    cursor: pointer;
    font-size: 9pt;
    font-weight: 400;
  }

  .icon.active {
    color: pink;
  }

  .icon.active {
    filter: brightness(0) saturate(130%) invert(146%) sepia(108%)
      saturate(1067%) hue-rotate(177deg) brightness(300%) contrast(144%);
    font-weight: 900;
  }

  @media (min-width: 744px) {
    .footerScreenSmall {
      display: none;
    }
  }
</style>
