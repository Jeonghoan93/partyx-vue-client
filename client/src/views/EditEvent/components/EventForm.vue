<template>
  <div>
    <h2>Event Details</h2>
    <!-- add event form markup here -->
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "EventForm",
    props: {
      mode: {
        type: String,
        required: true,
        validator: (value: string) => ["create", "edit"].includes(value),
      },
    },
  });
</script>
