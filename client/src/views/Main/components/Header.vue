<template>
  <div class="head">
    <h1>{{ headerText }}</h1>
    <span @click="goToLogin"
      ><font-awesome-icon icon="fa-solid fa-user"
    /></span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";

  export default defineComponent({
    name: "Header",
    props: {
      headerText: {
        type: String,
        required: true,
      },
    },
    setup() {
      const router = useRouter();

      function goToLogin() {
        router.push("/auth/login");
      }

      return {
        goToLogin,
      };
    },
    data() {
      return {};
    },
  });
</script>

<style lang="scss" scoped>
  .head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 15pt;
      font-weight: 700;
      user-select: none;
    }

    span {
      cursor: pointer;
      font-size: 13pt;
    }
  }
</style>
