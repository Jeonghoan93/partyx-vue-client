<template>
  <div class="login-container">
    <div class="login">
      <h1>Welcome back</h1>
      <form @submit.prevent="login">
        <!-- message -->
        <div v-if="Message" class="success-message">
          {{ Message }}
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <button @click="redirectToSignUp">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import api from "../../services/api";
  import { defineComponent, ref, Ref } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";

  // useStore() function call inside the setup() function and defines the email, password, and successMessage as reactive refs.
  export default defineComponent({
    methods: {
      redirectToSignUp() {
        this.$router.push("/auth/signup");
      },
    },
    setup() {
      const store = useStore();
      const router = useRouter();
      const email: Ref<string> = ref("");
      const password: Ref<string> = ref("");
      const Message: Ref<string> = ref("");

      const login = async () => {
        try {
          const res = await api.post<{ token: string }>("/auth/login", {
            email: email.value,
            password: password.value,
          });

          const { token } = res.data;

          // store the token in local storage
          localStorage.setItem("token", token);

          // set the success message
          Message.value = "Logged in successfully!";

          // Redirect to the home page
          setTimeout(() => {
            store.commit("setUserLoggedIn", true);
            console.log("Redirecting...");
            router.push("/");
          }, 2000);
        } catch (error) {
          console.error("Error during login: ", error);

          // Display an error message
          Message.value = "Invalid credentials. Please try again.";
        }
      };
      return {
        email,
        password,
        Message,
        login,
      };
    },
  });
</script>

<style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4%;
  }

  .login {
    width: 100%;
    max-width: 400px;
    background-color: #333;
    padding: 2rem;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h1 {
    color: #fff;
    font-size: 20pt;
    margin-bottom: 1.4rem;
    text-align: center;
  }

  .input-group {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    font-size: 11pt;
    color: #fff;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #444;
    color: #fff;
    outline: none;
    box-sizing: border-box;
  }

  input::placeholder {
    color: #999;
  }

  button {
    margin-top: 1rem;
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #3d8cf8;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #2680f0;
  }
  .success-message {
    color: rgb(37, 180, 37);
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .fail-message {
    color: rgb(37, 180, 37);
    font-weight: bold;
    margin-bottom: 1rem;
  }
</style>
