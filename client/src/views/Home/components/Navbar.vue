<template>
  <nav>
    <router-link class="logo" to="/">
      Party<span class="x">X</span>
    </router-link>
    <header class="nav-links">
      <router-link v-if="!isLoggedIn()" class="router-link" to="/auth/signup">
        Sign up
      </router-link>
      <router-link v-if="!isLoggedIn()" class="router-link" to="/auth/login"
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
  import { defineComponent } from "vue";
  import { useStore } from "vuex";
  import api from "../../../services/api";
  import { useRouter } from "vue-router";

  export default defineComponent({
    name: "Navbar",
    setup() {
      const store = useStore();
      const router = useRouter();
      const isLoggedIn = () => store.state.userLoggedIn;

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
        router.push("/auth/login");
      };

      return {
        isLoggedIn,
        handleLogout,
      };
    },
  });
</script>

<style scoped>
  nav {
    position: sticky;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: rgb(30 35 35 / 0.8);
    padding: 0.9rem;
    z-index: 99;
  }

  .nav-links {
    display: flex;
    gap: 1rem;
    margin-right: 2%;
  }

  .logo {
    position: absolute;
    left: 2%;
    margin-top: 0px;
    text-decoration: none;
    border: none;
    font-size: 14pt;
    font-weight: 700;
    color: white;
    padding: 0.5rem 0.9rem;
    border-radius: 4px;
    cursor: pointer;
  }
  .x {
    color: rgb(250, 43, 43);
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
</style>
