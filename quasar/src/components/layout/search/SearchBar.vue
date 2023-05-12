<template>
  <div class="TOOLBAR_input-container row justify-center no-wrap">
    <div class="search-bar">
      <q-input
        dense
        borderless
        class="q-pa-sm search-input"
        input-class="text-white q-pl-sm text-body1;"
        input-style="border: none"
        v-model.trim="searchText"
        placeholder="Search..."
        input-debounce="0"
        @keyup="getSearchResults"
        @blue="closeSearch"
      >
        <template v-slot:append>
          <q-icon
            v-if="searchText.length"
            class="cursor-pointer"
            name="clear"
            color="white"
            @click.stop="SearchText = ''"
          />
        </template>

        <template v-slot:after>
          <div class="q-pr-sm">
            <q-spinner
              v-if="searching"
              color="white"
              size="30px"
              class="q-pa-none"
            />
            <q-icon
              v-else
              color="white"
              size="30px"
              class="q-pa-none"
              name="search"
            />
          </div>
        </template>
      </q-input>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      searchText: <string>'',
      searching: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.TOOLBAR {
  &_input-container {
    margin-top: 6px;
    min-width: 700px;
  }
}

.search-bar {
  position: relative;
  width: 100%;

  .search-input {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  .search-icon {
    font-size: 20px;
  }
}
</style>
