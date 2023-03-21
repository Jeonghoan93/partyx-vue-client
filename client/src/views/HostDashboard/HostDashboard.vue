<template>
  <div>
    <h1>Host Dashboard</h1>
    <host-events-list />
    <add-event-button />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import AddEventButton from "./components/AddEventButton.vue";
  import HostEventsList from "./components/HostEventsList.vue";

  export default defineComponent({
    name: "HostDashboard",
    components: {
      AddEventButton,
      HostEventsList,
    },
  });
</script>
