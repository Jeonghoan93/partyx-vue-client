<template>
  <div class="event-detail">
    <div class="container">
      <div class="left">
        <div class="image-slider">
          <!-- add image slider component here  -->
        </div>
        <h1>{{ event.title }}</h1>
        <div class="host-info">
          <img
            class="host-image"
            src="{{ event.host.image }}"
            alt="host profile picture"
          />
          <span>{{ event.host.name }}</span>
        </div>
        <p>{{ event.description }}</p>
        <p>Location: {{ event.location }}</p>
        <p>Date: {{ event.startDate }} - {{ event.endDate }}</p>
        <p>Price: {{ event.price }}</p>
        <button class="boo-btn">Book</button>
        <div class="more-details">
          <!-- add more details -->
        </div>
      </div>
      <div class="right" v-if="screenWidth > 900">
        <div class="other-events">
          <!-- add a list of other event with a scroll view   -->
        </div>
      </div>
      <div class="right-mobile" v-else>
        <div class="other-events">
          <!-- add a list of other events with a scroll view -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted } from "vue";

  export default defineComponent({
    name: "EventDetail",
    setup() {
      const screenWidth = ref(window.innerWidth);
      const onResize = () => {
        screenWidth.value = window.innerWidth;
      };

      onMounted(() => {
        window.addEventListener("resize", onResize);
      });

      onUnmounted(() => {
        window.removeEventListener("resize", onResize);
      });

      // dummy event, replace this later
      const event = ref({
        id: 1,
        title: "Sample Event 1",
        startDate: "2023-04-01",
        endDate: "2023-04-02",
        location: "New York, NY",
        description: "This is a sample event for demonstration purposes.",
        price: "$100",
        host: {
          name: "John Doe",
        },
      });

      return {
        event,
        screenWidth,
      };
    },
  });
</script>

<style scoped>
  .event-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    color: #fff;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
  }

  .left,
  .right {
    padding: 20px;
  }

  .left {
    flex: 1;
    background-color: #333;
    border-radius: 5px;
  }

  .right {
    flex: 1;
    background-color: #444;
    border-radius: 5px;
    display: none;
  }

  .right.mobile {
    display: block;
  }

  .image-slider {
    width: 100%;
    height: 300px;
    background-color: #555;
    margin-bottom: 20px;
  }

  .host-info {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .host-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .book-btn {
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .more-details {
    /* Add styles for more detailed information about the event */
  }

  .other-events {
    /* Add styles for the other events list with a scroll view */
  }

  @media screen and (min-width: 901px) {
    .event-detail {
      flex-direction: row;
    }

    .left {
      margin-right: 20px;
    }

    .right {
      display: block;
    }

    .right.mobile {
      display: none;
    }
  }
</style>
