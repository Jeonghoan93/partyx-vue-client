<template>
  <footer class="eventFooter">
    <div class="desc">
      <div class="price">price</div>
      <div class="date">date</div>
    </div>

    <div class="bookBtn">
      <button class="btn">Reserve</button>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "EventFooter",
  });
</script>

<style lang="scss"></style>
