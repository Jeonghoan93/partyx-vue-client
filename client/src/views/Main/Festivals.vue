<template>
  <div class="explore">
    <div class="festivals">
      <Header headerText="Festivals" />
    </div>

    <div class="itemMain">
      <div class="itemList">
        <div class="item">
          <div class="desc">
            <h2>name of event</h2>
            <p>description or detail of the event</p>
          </div>

          <div class="imageBox">
            Image

            <div class="imageDesc">
              <div class="itemImage">Image</div>
              <div class="itemDesc">
                <h2>name of event</h2>
                <p>type of event</p>
              </div>
              <div class="itemBtn">
                <button>Book</button>
                <p>btn desc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="items">
      <div class="itemCard">
        <div class="itemHead">
          <h2>Item info</h2>
          <span>See all</span>
        </div>

        <div class="itemList">
          <div class="item">
            <div class="itemImage">Image</div>

            <div class="itemDesc">
              <div class="desc">
                <h2>name of event</h2>
                <p>type of event</p>
              </div>

              <div class="btn">
                <button>Book</button>
                <p>btn desc</p>
              </div>
            </div>
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
    name: "Festivals",
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

  .festivals {
    display: flex;
    flex-direction: column;

    border-bottom: 1px solid rgb(50, 51, 51);
  }

  .itemMain {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    border-bottom: 1px solid rgb(50, 51, 51);

    .itemList {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .item {
        display: flex;
        flex-direction: column;

        .itemDesc {
          .desc {
            display: flex;
            flex-direction: column;

            h2 {
              font-size: 17pt;
              font-weight: 700;
              user-select: none;
            }

            p {
              font-size: 10pt;
              font-weight: 400;
              user-select: none;
              color: rgb(174, 174, 168);
            }
          }
        }

        .imageBox {
          display: flex;
          flex-direction: column;
          border: 1px solid rgb(50, 51, 51);
          border-radius: 10px;
          padding: 10px;

          .imageDesc {
            align-items: center;
            justify-content: space-between;
            display: flex;
            flex-direction: row;
            align-items: center;

            .itemBtn {
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
    }
  }

  .items {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    .itemCard {
      display: flex;
      flex-direction: column;

      .itemHead {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h2 {
          font-size: 12pt;
          font-weight: 700;
          user-select: none;
        }

        span {
          cursor: pointer;
          font-size: 10pt;
        }
      }

      .itemList {
        display: flex;
        flex-direction: column;

        .item {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;

          .itemImage {
            display: flex;
            padding: 50px;
            border: 1px solid rgb(50, 51, 51);
            border-radius: 10px;
          }

          .itemDesc {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;

            border-bottom: 1px solid rgb(50, 51, 51);

            .desc {
              display: flex;
              flex-direction: column;
              padding: 10px;
            }

            .btn {
              display: flex;
              flex-direction: column;
              padding: 10px;
            }
          }
        }
      }
    }
  }
</style>
