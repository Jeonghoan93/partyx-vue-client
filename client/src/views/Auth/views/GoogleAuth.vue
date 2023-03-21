<template>
  <div>
    <h1>Sign In with Google</h1>
    <button @click="signInWithGoogle">Sign In with Google</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "GoogleAuth",
    setup() {
      const signInWithGoogle = async () => {
        // call the api to authenticate with google and handle the response
      };

      return { signInWithGoogle };
    },
  });
</script>
