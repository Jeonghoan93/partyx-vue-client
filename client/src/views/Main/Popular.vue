<template>
  <div class="explore">
    <div class="today">
      <div class="date">
        <span>Sunday 30 APRIL</span>
      </div>

      <Header headerText="Today" />
    </div>

    <div class="itemBox">
      <div class="itemList">
        <div class="item">
          <div class="image">Image</div>
          <div class="desc">
            <h2>name of event</h2>
            <p>description or detail of the event</p>
          </div>
          <div class="btn">
            <button>Book</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Header from "./components/Header.vue";

  export default defineComponent({
    name: "Popular",
    components: {
      Header,
    },
    data() {
      return {};
    },
  });
</script>

<style lang="scss" scoped>
  .explore {
    color: rgb(209, 221, 221);
  }

  .today {
    display: flex;
    flex-direction: column;

    .date {
      margin-top: 10px;
      display: flex;

      span {
        font-size: 9pt;
        font-weight: 400;
        user-select: none;
        color: rgb(174, 174, 168);
      }
    }
  }

  .itemBox {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 17pt;
      font-weight: 700;
      user-select: none;
    }

    .itemList {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        border: 1px solid rgb(50, 51, 51);
        padding: 5px;
        border-radius: 20px;

        .image {
          border: 1px solid rgb(77, 118, 118);
          border-radius: 10px;
          padding: 10px;
        }

        .desc {
          h2 {
            font-size: 12pt;
            font-weight: 700;
            user-select: none;
          }

          p {
            font-size: 9pt;
            font-weight: 400;
            user-select: none;
            color: rgb(142, 142, 135);
          }
        }
      }
    }
  }
</style>
