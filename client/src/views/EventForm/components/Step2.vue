<template>
  <div>
    <h3>Location Details</h3>
    <div>
      <label for="address">Address:</label>
      <input
        type="text"
        id="address"
        v-model="address"
        required
        ref="addressInput"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { setupGoogleMapsAutocomplete } from "../data/googleMapsIntegration";

  export default defineComponent({
    name: "Step2",
  });
</script>
