<template>
  <footer v-show="isMobile" class="footer">
    <div
      class="footerContainer"
      @click="changePage('/popular')"
      :class="{ active: isActive('/popular') }"
    >
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-table-list" />
      </div>
      <div class="title">
        <p>Popular</p>
      </div>
    </div>
    <div
      class="footerContainer"
      @click="changePage('/clubs')"
      :class="{ active: isActive('/clubs') }"
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
      @click="changePage('/festivals')"
      :class="{ active: isActive('/festivals') }"
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
      @click="changePage('/house')"
      :class="{ active: isActive('/house') }"
    >
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-house" />
      </div>
      <div class="title">
        <p>House</p>
      </div>
    </div>
    <div
      class="footerContainer"
      @click="changePage('/search')"
      :class="{ active: isActive('/search') }"
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
  import { defineComponent, onMounted, onUnmounted, ref } from "vue";
  import { RouteLocationRaw, useRouter } from "vue-router";

  export default defineComponent({
    name: "footer",
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
    background-color: rgba(30, 35, 35, 0.9);
    padding: 0;
    z-index: 99;
  }

  .footerContainer {
    margin-top: 0.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(186, 180, 180);
    font-weight: 400;
    cursor: pointer;
  }
  .icon {
    font-size: 12pt;
  }
  .title {
    font-size: 7pt;
  }

  .footerContainer.active {
    color: pink;
  }

  .footerContainer.active {
    filter: brightness(0) saturate(130%) invert(146%) sepia(108%)
      saturate(1067%) hue-rotate(177deg) brightness(300%) contrast(144%);
    font-weight: 800;
  }
</style>
