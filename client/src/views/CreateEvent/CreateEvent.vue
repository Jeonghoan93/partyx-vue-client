<template>
  <div>
    <h2>Create Event</h2>
    <EventForm />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import EventForm from "./components/EventForm.vue";

  export default defineComponent({
    name: "CreateEvent",
    component: {
      EventForm,
    },
  });
</script>
