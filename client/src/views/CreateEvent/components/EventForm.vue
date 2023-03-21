<template>
  <form @submit.prevent="submitEvent">
    <div v-if="step === 1">
      <!-- Step 1: Basic event details -->
      <h3>Basic Event Details</h3>
      <div>
        <label for="title">Event Title:</label>
        <input type="text" id="title" v-model="title" required />
      </div>
      <div>
        <label for="description">Event Description:</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>
      <div>
        <label for="event-type">Event Type:</label>
        <select id="event-type" v-model="eventType" required>
          <option value="">Select an event type</option>
          <option value="birthday">Birthday Party</option>
          <option value="concert">Concert</option>
          <option value="fundraiser">Fundraiser</option>
          <!-- Add more event types as needed -->
        </select>
      </div>
      <div>
        <label for="max-guests">Maximum Guests:</label>
        <input type="number" id="max-guests" v-model="maxGuests" required />
      </div>
      <div>
        <label for="start-date">Start Date:</label>
        <input
          type="datetime-local"
          id="start-date"
          v-model="startDate"
          required
        />
      </div>
      <div>
        <label for="end-date">End Date:</label>
        <input type="datetime-local" id="end-date" v-model="endDate" required />
      </div>
      <div>
        <label for="public-event">Public Event:</label>
        <input
          type="radio"
          id="public-event"
          value="public"
          v-model="eventType"
          required
        />
        <label for="private-event">Private Event:</label>
        <input
          type="radio"
          id="private-event"
          value="private"
          v-model="eventType"
        />
      </div>
    </div>

    <div v-if="step === 2">
      <!-- Step 2: Location details -->
      <h3>Location Details</h3>
      <div>
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="address" required />
      </div>
      <div>
        <label for="city">City:</label>
        <input type="text" id="city" v-model="city" required />
      </div>
      <div>
        <label for="state">State/Province:</label>
        <input type="text" id="state" v-model="state" required />
      </div>
      <div>
        <label for="country">Country:</label>
        <input type="text" id="country" v-model="country" required />
      </div>
      <div>
        <label for="zip-code">Zip Code:</label>
        <input type="text" id="zip-code" v-model="zipCode" required />
      </div>
      <div>
        <label for="coordinates">Coordinates:</label>
        <input type="text" id="coordinates" v-model="coordinates" required />
      </div>
    </div>

    <div v-if="step === 3">
      <!-- Step 3: Additional event details -->
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

    <div v-if="step === 4">
      <!-- Step 4: Pricing and ticket availability -->
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

    <div class="buttons">
      <button type="button" @click="previousStep" v-if="step > 1">Back</button>
      <button type="button" @click="nextStep" v-if="step < 4">Next</button>
      <button type="submit" v-if="step === 4">Submit</button>
    </div>
  </form>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { createEvent } from "../../../services/eventService";
  import EventData from "../data/EventData";

  export default defineComponent({
    name: "EventForm",
    setup() {
      const step = ref(1);
      const event = EventData;

      async function handleSubmit() {
        try {
          const { data } = await createEvent(event);
          console.log("Event created:", data);
        } catch (error) {
          console.error("Error creating event:", error);
        }
      }

      function nextStep() {
        if (step.value < 4) {
          step.value++;
        }
      }

      function previousStep() {
        if (step.value > 1) {
          step.value--;
        }
      }

      function handleImages(fileEvent: Event) {
        const files = (fileEvent.target as HTMLInputElement).files;
        if (files) {
          Array.from(files).forEach((file) => {
            const reader = new FileReader();

            reader.onloadend = () => {
              event.images.push(reader.result);
            };
            reader.readAsDataURL(file);
          });
        }
      }

      return {
        step,
        event,
        handleSubmit,
        nextStep,
        previousStep,
        handleImages,
      };
    },
  });
</script>
