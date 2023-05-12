<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-2">
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <bhl-menu v-if="isBHL" @toggle="menuCompressed = !menuCompressed" />
      <app-menu v-else @toggle="menuCompressed = !menuCompressed" />
    </q-drawer>

    <q-page-container>
      <q-header
        square
        flat
        class="shadow-2 bg-grey-9 text-white q-py-xs header-bottom-spacing"
      >
        <q-toolbar>
          <q-btn flat dense round icon="home" aria-label="Menu" :to="{}" />

          <q-space />

          <div class="search-width-container relative-position">
            <SearchBar />
          </div>

          <q-space />

          <q-btn flat dense round icon="power_settings_new" @click="logout" />
        </q-toolbar>
      </q-header>

      <div class="row justify-center">
        <router-view class="router-view" :key="$route.path" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SearchBar from 'src/components/layout/search/SearchBar.vue';
import AppMenu from 'src/components/layout/menu/AppMenu.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    SearchBar,
    AppMenu,
  },
  data() {
    return {};
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.router-view {
  width: 100%;
  max-width: 1540px;
}

.header-bottom-spacing {
  padding-bottom: 30px;
}

.search-width-container {
  padding-right: 140px;
  width: 970px;
  min-width: 850px;
  padding-left: 10px;
}
</style>
