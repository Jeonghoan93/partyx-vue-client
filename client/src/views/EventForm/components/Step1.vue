<template>
  <div>
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
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Step1",
  });
</script>
