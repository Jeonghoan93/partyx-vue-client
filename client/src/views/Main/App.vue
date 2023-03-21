<template>
  <div id="appMain">
    <AppLayout>
      <Main />
    </AppLayout>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Main from "./views/Main.vue";

  export default defineComponent({
    components: {
      Main,
    },
  });
</script>
