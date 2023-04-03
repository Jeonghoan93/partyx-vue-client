<template>
  <div>
    <h3>Pricing and Ticket Availability</h3>
    <div>
      <label for="price-per-guest">Price Per Guest:</label>
      <input
        type="number"
        id="price-per-guest"
        v-model="pricePerGuest"
        required
      />
    </div>
    <div>
      <label for="currency">Currency:</label>
      <select id="currency" v-model="currency" required>
        <option value="">Select a currency</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <!-- Add more currencies as needed -->
      </select>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Step4",
  });
</script>
