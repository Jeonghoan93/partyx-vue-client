<template>
  <div class="searchbar">
    <input
      class="searchInput"
      type="text"
      placeholder="Search Party"
      v-model="searchTerm"
      @input="handleSearch"
      @click.stop="showModal = true"
    />
    <div v-if="showModal" class="modal" ref="modal">
      <div class="modal-content" @click.stop>
        <!-- location input -->
        <input
          class="filterInput"
          type="text"
          id="location"
          v-model="location"
          placeholder="Type City"
        />
        <!-- start date and hour -->
        <input
          class="filterInput"
          type="datetime-local"
          id="startDate"
          v-model="startDate"
          placeholder="Start Day & Hour"
        />
        <!-- end date and hour -->
        <input
          class="filterInput"
          type="datetime-local"
          id="endDate"
          v-model="endDate"
          placeholder="End Day & Hour"
        />
        <!-- number of tickets input -->
        <input
          class="filterInput"
          type="number"
          id="numberTickets"
          v-model="numTickets"
          placeholder="How many ticket or person?"
        />

        <button @click="submitFilters">Submit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch, Ref } from "vue";

  export default defineComponent({
    setup() {
      const searchTerm = ref("");
      const showModal = ref(false);
      const location = ref("");
      const startDate = ref("");
      const endDate = ref("");
      const numTickets = ref("");

      const modal: Ref<HTMLElement | null> = ref(null);

      const handleClickOutside = (event: MouseEvent) => {
        if (modal.value && !modal.value.contains(event.target as Node)) {
          showModal.value = false;
        }
      };

      watch(showModal, (newValue) => {
        if (newValue) {
          window.addEventListener("click", handleClickOutside);
        } else {
          window.removeEventListener("click", handleClickOutside);
        }
      });

      const handleSearch = () => {
        console.log("Search term:", searchTerm.value);
        // implement the search logic here
      };

      const submitFilters = () => {
        console.log("Location:", location.value);
        console.log("Start Date:", startDate.value);
        console.log("End Date:", endDate.value);
        console.log("Number of Tickets:", numTickets.value);
        // implement the logic to send filter date to the backend server
        showModal.value = false;
      };

      return {
        modal,
        searchTerm,
        showModal,
        location,
        startDate,
        endDate,
        numTickets,
        handleSearch,
        submitFilters,
      };
    },
  });
</script>

<style scoped>
  @media (max-width: 743px) {
    .searchbar {
      width: 100%;
    }

    .searchInput {
      width: 100%;
    }
  }
  .searchbar {
    flex-grow: 1;
    padding-left: 0.8rem;
    padding-right: 1.4rem;
  }

  .searchInput {
    font-size: 10pt;
    font-weight: 600;
    color: rgb(156, 144, 144);
    background-color: rgb(30 35 35 / 0.8);
    border: none;
    padding: 0.5rem 0.9rem;
    border-radius: 8px;
    cursor: pointer;
  }

  .filterInput {
    /* Add your input styling here */
    font-size: 10pt;
    font-weight: 600;
    color: rgb(132, 123, 123);
    background-color: rgb(30 35 35 / 0.8);
    border: none;
    padding: 0.5rem 0.9rem;
    border-radius: 8px;
    cursor: pointer;
  }

  h2 {
    font-size: 14pt;
    font-weight: 900;
  }

  .modal {
    position: absolute;
    top: 3.7rem;
    width: 100%;
    max-width: 500px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 1rem;
    z-index: 100;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    max-height: 80vh;
    overflow-y: auto;
    padding: 4%;
    border-radius: 8px;
    position: relative;
  }

  .close {
    position: absolute;
    top: 0.5rem;
    right: 4%;

    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
  }

  button {
    background-color: #1c3b69;
    width: 100%;
    border: none;
    color: white;
    margin-top: 14px;
    padding: 0.5rem 1rem;
    font-size: 10pt;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-end;
  }

  input,
  label {
    color: #fff;
    font-size: 10pt;
  }

  label {
    font-weight: 600;
    margin-top: 0.5rem;
  }
</style>
