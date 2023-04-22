<template>
  <div id="appHome">
    <AppLayout>
      <Home />
    </AppLayout>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Home from "./Home.vue";

  export default defineComponent({
    name: "AppHome",
    components: {
      Home,
    },
  });
</script>
