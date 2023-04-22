<template>
  <div id="appAuth">
    <AppLayout>
      <Auth />
    </AppLayout>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import Auth from "../Auth.vue";

  export default defineComponent({
    components: {
      Auth,
    },
  });
</script>

<style scoped></style>
