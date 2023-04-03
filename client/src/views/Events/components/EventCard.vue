import { faHeart } from '@fortawesome/free-solid-svg-icons'; import { faHeart }
from '@fortawesome/free-solid-svg-icons';

<template>
  <div class="event-card">
    <div class="photo container">
      <div class="photo-slides">
        <img
          v-for="(photo, index) in event.photos"
          :key="index"
          :src="photo"
          @click="handlePhotoClick(index)"
        />
      </div>

      <div class="photo-controls">
        <div class="photo-dots">
          <span
            v-for="(photo, index) in event.photos"
            :key="index"
            :class="{ active: currentPhoto === index }"
          ></span>
        </div>
        <div class="heart-icon" @click="toggleFavorite">
          <i :class="{ fas: isFavorite, far: !isFavorite }">
            <font-awesome-icon icon="fa-solid fa-heart" />
          </i>
        </div>
      </div>
    </div>

    <div class="event-info">
      <h3 class="event-name">{{ event.title }}</h3>
      <p class="location">
        {{ event.location.city }}, {{ event.location.country }}
      </p>
      <div class="date-time">
        <span>{{ formatDate(event.startDate) }}</span> -
        <span>{{ formatDate(event.endDate) }}</span>
      </div>

      <div class="price">{{ event.pricePerPerson }} {{ event.currency }}</div>

      <div class="rating">
        <i v-for="star in getRatingStars()" :key="star" class="fas fa-star"></i>
        <span>({{ event.numberOfRatings }})</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";

  export default defineComponent({
    props: {
      event: {
        type: Object as PropType<Event>,
        required: true,
      },
    },
    data() {
      return {
        currentPhoto: 0,
        isFavorite: false,
      };
    },
    methods: {
      handlePhotoClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        const clickPositionX =
          event.clientX - target.getBoundingClientRect().left;
        const clickPercentage = (clickPositionX / target.clientWidth) * 100;

        if (clickPercentage > 10 && clickPercentage < 90) {
          // Redirect to event detail page
          this.$router.push({
            name: "EventDetail",
            params: { eventId: this.event._id },
          });
        } else if (clickPercentage <= 10) {
          // Slide to the previous photo
          this.currentPhoto =
            this.currentPhoto === 0
              ? this.event.photos.length - 1
              : this.currentPhoto - 1;
        } else {
          // Slide to the next photo
          this.currentPhoto =
            this.currentPhoto === this.event.photos.length - 1
              ? 0
              : this.currentPhoto + 1;
        }
      },
      toggleFavorite() {
        this.isFavorite = !this.isFavorite;
      },
      formatDate(date: string) {
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        };
        return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
      },
      getRatingStart() {
        const stars = [];
        for (let i = 1; i <= Math.round(this.event.rating); i++) {
          stars.push(i);
        }
        return stars;
      },
    },
  });
</script>
