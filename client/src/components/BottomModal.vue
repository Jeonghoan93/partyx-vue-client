<template>
  <transition name="slide-up">
    <div v-if="showModal" class="modal">
      <div class="head">
        <font-awesome-icon
          @click="openModal"
          class="icon"
          icon="fa-solid fa-xmark"
        />
      </div>

      <div class="body">
        <div class="upper">
          <div class="countryCode">country code</div>
          <div class="phoneNumber">phone number</div>
          <div class="upperDesc">
            <span>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
              <span class="privacyPolicy">Privacy Policy</span>
            </span>
          </div>
          <div class="continueBtn">
            <button>Continue</button>
          </div>
        </div>
      </div>

      <div class="separator-container">
        <div class="separator-line"></div>
        <span class="separator-text">or</span>
        <div class="separator-line"></div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import { defineComponent, inject, Ref } from "vue";

  export default defineComponent({
    data() {
      return {};
    },

    setup() {
      const showModal = inject("showModal") as Ref<boolean>;

      const openModal = () => {
        showModal.value = !showModal.value;
      };

      return {
        showModal,
        openModal,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    bottom: 0;
    right: 0;
    max-width: 400px;
    width: 100%;
    height: 98%;
    background-color: rgb(40, 38, 38);
    color: rgb(255, 255, 255);
    z-index: 1000;
    overflow-y: auto;
    border-radius: 10px 0 0 0;

    .head {
      display: flex;
      justify-content: flex-end;

      padding: 10px;

      .icon {
        cursor: pointer;
      }
    }

    .body {
      display: flex;
      flex-direction: column;
      padding: 0px 10px;

      .upper {
        display: flex;
        flex-direction: column;
        align-items: center;

        .countryCode {
          padding: 10px;
        }

        .phoneNumber {
          padding: 10px;
        }

        .upperDesc {
          padding: 10px;
          font-size: 9pt;
          font-weight: 400;
          line-height: 1.4;

          .privacyPolicy {
            font-weight: 500;
            color: rgb(189, 229, 231);
            cursor: pointer;
          }
        }

        .continueBtn {
          padding: 10px;

          button {
            padding: 10px 135px;
            height: 40px;
            width: 100%;
            border-radius: 10px;
            background-color: rgb(64, 164, 97);
            color: white;
            font-size: 10pt;
            font-weight: 700;
            cursor: pointer;
          }
        }
      }
    }
  }

  .separator-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    padding: 0 10px;
  }

  .separator-line {
    flex-grow: 1;
    height: 1px;
    background-color: #4b4848;
  }

  .separator-text {
    margin: 0 10px;
    font-size: 14px;
    color: #afa6a6;
  }

  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.3s ease;
  }

  .slide-up-enter-from,
  .slide-up-leave-to {
    transform: translateY(100%);
  }
</style>
