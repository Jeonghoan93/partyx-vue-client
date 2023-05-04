<template>
  <div class="explore">
    <div class="searchHead">
      <h1>Search</h1>
    </div>

    <div class="search">
      <Header headerText="Search" />

      <div class="searchBar">
        <span class="searchIcon"
          ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
        /></span>
        <input type="text" placeholder="Type your city" />
        <span v-if="isSearchBarClicked" class="cancel">Cancel</span>
      </div>
    </div>

    <div class="discover">
      <div class="head">
        <h1>Discover</h1>
      </div>
      <div class="searchKeywords">Search Keywords Table</div>
    </div>

    <div class="suggested">
      <h1>Suggested</h1>
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
    name: "Search",
    components: {
      Header,
    },
    data() {
      return {
        isSearchBarClicked: false,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .explore {
    color: rgb(209, 221, 221);

    .searchHead {
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 13pt;
        font-weight: 700;
        user-select: none;
      }
    }
  }

  .search {
    display: flex;
    flex-direction: column;

    .searchBar {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 10px;

      .searchIcon {
        font-size: 13pt;
        margin-right: 10px;
        color: rgb(122, 122, 122);

        &:hover {
          cursor: pointer;
        }
      }

      input {
        width: 100%;
        height: 30px;
        border-radius: 10px;
        border: none;
        outline: none;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 11pt;
        font-weight: 500;
        background-color: rgb(46, 49, 49);
        color: rgb(247, 255, 255);
      }

      .cancel {
        padding: 10px;
        font-weight: 600;
        font-size: 10pt;
        cursor: pointer;
      }
    }
  }

  .discover {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    .head {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        font-size: 15pt;
        font-weight: 700;
        user-select: none;
      }
    }
    .searchKeywords {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: rgb(46, 49, 49);
      border-radius: 10px;
      padding-left: 10px;
      padding-right: 10px;
      height: 30px;
      font-size: 11pt;
      font-weight: 500;
      color: rgb(247, 255, 255);
    }
  }

  .suggested {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 15pt;
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
        border-radius: 20px;
      }
    }
  }
</style>
