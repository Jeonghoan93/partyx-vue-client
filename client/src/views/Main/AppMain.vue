<template>
  <div id="appMain">
    <Main />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Main from "./Main.vue";

  export default defineComponent({
    components: {
      Main,
    },
  });
</script>
