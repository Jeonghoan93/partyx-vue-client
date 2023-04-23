<template>
  <footer v-if="isMobile" class="footerMobile">
    <div
      class="footerContainer"
      @click="changePage('/explore')"
      :class="{ active: isActive('/explore') }"
    >
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-table-list" />
      </div>
      <div class="title">
        <p>Today</p>
      </div>
    </div>
    <div
      class="footerContainer"
      @click="changePage('/wishlists')"
      :class="{ active: isActive('/wishlists') }"
    >
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-house-circle-check" />
      </div>
      <div class="title">
        <p>Clubs</p>
      </div>
    </div>
    <div
      class="footerContainer"
      @click="changePage('/auth/login')"
      :class="{ active: isActive('/auth/login') }"
    >
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-tent" />
      </div>
      <div class="title">
        <p>Festivals</p>
      </div>
    </div>
    <div
      class="footerContainer"
      @click="changePage('/auth/login')"
      :class="{ active: isActive('/auth/login') }"
    >
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-house" />
      </div>
      <div class="title">
        <p>Amateur</p>
      </div>
    </div>
    <div
      class="footerContainer"
      @click="changePage('/explore')"
      :class="{ active: isActive('/explore') }"
    >
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <div class="title">
        <p>Search</p>
      </div>
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
  .footerMobile {
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

  .footerContainer {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(186, 180, 180);

    font-weight: 400;
  }
  .icon {
    font-size: 12pt;
    cursor: pointer;
  }
  .title {
    font-size: 8pt;
  }

  .footerContainer.active {
    color: pink;
  }

  .footerContainer.active {
    filter: brightness(0) saturate(130%) invert(146%) sepia(108%)
      saturate(1067%) hue-rotate(177deg) brightness(300%) contrast(144%);
    font-weight: 800;
  }

  @media (min-width: 744px) {
    .footerScreenSmall {
      display: none;
    }
  }
</style>
