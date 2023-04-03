<template>
  <div>
    <h3>Additional Event Details</h3>
    <div>
      <label for="images">Event Images:</label>
      <input type="file" id="images" @change="handleImages" multiple />
    </div>
    <div>
      <label for="amenities">Amenities:</label>
      <select id="amenities" v-model="amenities" multiple>
        <option value="pool">Pool</option>
        <option value="sound-system">Sound System</option>
        <!-- Add more amenities as needed -->
      </select>
    </div>
    <div>
      <label for="music-genres">Music Genres:</label>
      <select id="music-genres" v-model="musicGenres" multiple>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
        <!-- Add more music genres as needed -->
      </select>
    </div>
    <div>
      <label for="party-rules">Party Rules:</label>
      <select id="party-rules" v-model="partyRules" multiple>
        <option value="no-smoking">No Smoking</option>
        <option value="no-pets">No Pets</option>
        <!-- Add more party rules as needed -->
      </select>
    </div>
    <div>
      <label for="party-theme">Party Theme:</label>
      <input type="text" id="party-theme" v-model="partyTheme" />
    </div>
    <div>
      <label for="cancellation-policy">Cancellation Policy:</label>
      <select id="cancellation-policy" v-model="cancellationPolicy" required>
        <option value="">Select a cancellation policy</option>
        <option value="flexible">Flexible</option>
        <option value="moderate">Moderate</option>
        <option value="strict">Strict</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Step3",
  });
</script>
