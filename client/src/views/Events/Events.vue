<template>
  <div class="events">
    <h1>Events</h1>
    <SearchBar />
    <div class="event-list">eventCard</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import SearchBar from "./components/SearchBar.vue";

  export default defineComponent({
    name: "Events",
    components: {
      SearchBar,
    },
    setup() {
      const events = ref([]);

      const fetchEvents = async () => {
        // call the api to fetch the events
      };

      fetchEvents();

      return { events };
    },
  });
</script>

<style scoped>
  .events {
    text-align: center;
    margin-top: 60px;
  }
  .event-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
</style>
