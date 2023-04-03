<template>
  <form @submit.prevent="submitEvent">
    <div v-if="step === 1">
      <!-- Step 1: Basic event details -->
      <Step1 />
    </div>

    <div v-if="step === 2">
      <!-- Step 2: Location details -->
      <Step2 />
    </div>

    <div v-if="step === 3">
      <!-- Step3: Additional Event Details -->
      <Step3 />
    </div>

    <div v-if="step === 4">
      <!-- Step 4: Pricing and ticket availability -->
      <Step4 />
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
  import { useRouter } from "vue-router";
  import { createEvent } from "../../services/eventService";

  import Step1 from "./components/Step1.vue";
  import Step2 from "./components/Step2.vue";
  import Step3 from "./components/Step3.vue";
  import Step4 from "./components/Step4.vue";

  export default defineComponent({
    name: "EventForm",
    components: {
      Step1,
      Step2,
      Step3,
      Step4,
    },
    setup() {
      const router = useRouter();

      const step = ref(1);
      const title = ref("");
      const description = ref("");
      const eventType = ref("");
      const maxGuests = ref(0);
      const startDate = ref("");
      const endDate = ref("");
      const address = ref("");
      const pricePerGuest = ref(0);
      const currency = ref("");
      const images = ref([]);
      const amenities = ref([]);
      const musicGenres = ref([]);
      const partyRules = ref([]);
      const partyTheme = ref("");
      const cancellationPolicy = ref("");

      const nextStep = () => {
        if (step.value < 4) {
          step.value += 1;
        }
      };

      const previousStep = () => {
        if (step.value > 1) {
          step.value -= 1;
        }
      };

      const handleImages = (event) => {
        // Handle image files here, you can use FileReader API or other methods
        // to store images in the images ref
      };

      const submitEvent = async () => {
        const eventFormData = {
          title: title.value,
          description: description.value,
          eventType: eventType.value,
          maxGuests: maxGuests.value,
          startDate: startDate.value,
          endDate: endDate.value,
          location: {
            address: address.value.formatted_address,
            placeId: address.value.placeId,
            city: "", // You can parse these values from the address object if needed
            state: "",
            country: "",
            zipCode: "",
            coordinates: [
              address.value.geometry.location.lat(),
              address.value.geometry.location.lng(),
            ],
          },
          pricePerGuest: pricePerGuest.value,
          currency: currency.value,
          images: images.value,
          amenities: amenities.value,
          musicGenres: musicGenres.value,
          partyRules: partyRules.value,
          partyTheme: partyTheme.value,
          cancellationPolicy: cancellationPolicy.value,
        };

        try {
          await createEvent(eventFormData);
          router.push("/events");
        } catch (error) {
          console.error("Error creating event:", error.message);
        }
      };

      return {
        step,
        title,
        description,
        eventType,
        maxGuests,
        startDate,
        endDate,
        address,
        pricePerGuest,
        currency,
        images,
        amenities,
        musicGenres,
        partyRules,
        partyTheme,
        cancellationPolicy,
        nextStep,
        previousStep,
        handleImages,
        submitEvent,
      };
    },
  });
</script>
