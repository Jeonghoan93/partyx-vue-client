<template>
  <div>
    <h1>EditEvent</h1>
    <!-- <EventForm /> -->
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import EventForm from "./components/EventForm.vue";

  export default defineComponent({
    name: "EditEvent",
    components: {
      EventForm,
    },
  });
</script>
