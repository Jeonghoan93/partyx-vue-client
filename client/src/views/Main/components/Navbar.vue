<template>
  <nav class="navbar" :class="{ active: isActive }">
    <SearchBar v-if="isActive" />
    <router-link v-if="!isActive" class="logo" to="/"> PartyX</router-link>
    <header class="nav-links">
      <router-link
        v-show="!isActive && !isLoggedIn()"
        class="router-link"
        to="/auth/signup"
      >
        Sign up
      </router-link>
      <router-link
        v-show="!isActive && !isLoggedIn()"
        class="router-link"
        to="/auth/login"
        >Login</router-link
      >
      <router-link
        class="router-link"
        to="#"
        @click.prevent="handleLogout"
        v-if="isLoggedIn()"
        >Logout</router-link
      >
    </header>
  </nav>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted, computed } from "vue";
  import { useStore } from "vuex";
  import api from "../../../services/api";
  import { useRouter, useRoute } from "vue-router";

  import SearchBar from "./SearchBar.vue";

  export default defineComponent({
    name: "NavbarMain",
    components: {
      SearchBar,
    },
    setup() {
      const store = useStore();
      const router = useRouter();
      // experimental
      const active = ref(false);
      const route = useRoute();
      const isActive = computed(() => active.value || route.path !== "/");

      const isLoggedIn = () => store.state.userLoggedIn;

      //experimental
      const handleScroll = () => {
        window.scrollY > 0 ? (active.value = true) : (active.value = false);
      };

      onMounted(() => {
        window.addEventListener("scroll", handleScroll);
      });

      onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
      });

      const handleLogout = () => {
        // Clear user data from the local storage and Vuex store
        localStorage.removeItem("user");
        localStorage.removeItem("firstName");
        localStorage.removeItem("token");
        store.commit("setUserLoggedIn", false);
        store.commit("setFirstName", "");

        // Remove the Authorization header from the axios instance
        delete api.defaults.headers.common["Authorization"];

        // Redirect to the login page
        router.push("/login");
      };

      return {
        isLoggedIn,
        handleLogout,
        isActive,
      };
    },
  });
</script>

<style scoped>
  .navbar {
    position: sticky;
    top: 0;
    height: 27px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: rgb(30 35 35 / 0.8);
    padding: 1rem;
    z-index: 99;
    transition: 2s all ease;
  }
  .navbar.active {
    background-color: rgba(0, 0, 0, 0.9);
  }

  .nav-links {
    display: flex;
    gap: 1rem;
    margin-right: 2%;
  }

  .logo {
    position: absolute;
    left: 2%;
    text-decoration: none;
    border: none;
    font-size: 14pt;
    font-weight: 800;
    color: white;
    padding: 0.5rem 0.9rem;
    border-radius: 4px;
    cursor: pointer;
  }

  .router-link {
    margin-top: 3px;
    background-color: #1c3b69;
    text-decoration: none;
    border: none;
    font-size: 10pt;
    font-weight: 600;
    color: white;
    padding: 0.5rem 0.9rem;

    border-radius: 4px;
    cursor: pointer;
  }
  @media (max-width: 744px) {
    .router-link {
      display: none;
    }
  }
</style>
