<template>
  <div class="listParty">
    <span class="button-listParty" @click.stop="showLoginModal = true">
      <font-awesome-icon icon="fa-solid fa-plus" />

      Create
    </span>

    <!-- login modal -->
    <div v-if="showLoginModal" class="modal" ref="modal">
      <div class="modal-content" @click.stop>
        <!-- location input -->
        <input
          class="filterInput"
          type="email"
          id="location"
          v-model="location"
          placeholder="Your email"
        />
        <!-- number of tickets input -->
        <input
          class="filterInput"
          type="password"
          id="numberTickets"
          v-model="numTickets"
          placeholder="Your password"
        />

        <button class="btn-login" @click="submitFilters">Login</button>
        <button class="btn-signup" @click="submitFilters">Sign up</button>
        <p>Login to proceed...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch, Ref } from "vue";

  export default defineComponent({
    setup() {
      const searchTerm = ref("");
      const showLoginModal = ref(false);
      const location = ref("");
      const startDate = ref("");
      const endDate = ref("");
      const numTickets = ref("");

      const modal: Ref<HTMLElement | null> = ref(null);

      const handleClickOutside = (event: MouseEvent) => {
        if (modal.value && !modal.value.contains(event.target as Node)) {
          showLoginModal.value = false;
        }
      };

      watch(showLoginModal, (newValue) => {
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
        showLoginModal.value = false;
      };

      return {
        modal,
        searchTerm,
        showLoginModal,
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
    .listParty {
      width: 100%;
    }

    .button-listParty {
      width: 100%;
    }
  }
  .listParty {
    padding-left: 0.8rem;
    padding-right: 1.4rem;
  }
  p {
    margin-left: 2%;
    font-size: 9pt;
    opacity: 0.7;
  }

  .button-listParty {
    font-size: 10pt;
    font-weight: 600;
    color: rgb(242, 232, 232);
    border: none;
    padding: 0rem 0.8rem;
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
    position: relative;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
  }

  .btn-login {
    background-color: #3e9b26;
    width: 100%;
    border: none;
    color: white;
    margin-top: 10px;
    padding: 0.5rem 1rem;
    font-size: 10pt;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-end;
  }
  .btn-signup {
    background-color: #3e9b26;
    width: 100%;
    border: none;
    color: white;
    margin-top: 10px;
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
