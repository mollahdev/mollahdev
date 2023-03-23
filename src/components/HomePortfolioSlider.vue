<template>
  <!-- Slider main container -->
  <div class="swiper h-screen portfolio-slider">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div
        class="swiper-slide"
        :key="index"
        v-for="(project, index) in projects"
      >
        <a
          :href="project.link"
          class="relative overflow-hidden transition-opacity duration-300 group h-full inline-block w-full"
        >
          <img
            :src="project.image"
            alt="Space-exploration-thunbail-project"
            loading="lazy"
            width="843"
            height="972"
            class="group-hover:scale-110 duration-500 transition-transform w-full h-full object-cover object-top"
          />
          <div
            class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-center"
          >
            <h3 class="text-white text-xl font-semibold mb-1 uppercase">
              {{ project.title }}
            </h3>
            <p class="font-light text-base uppercase">{{ project.subtitle }}</p>
          </div>
        </a>
      </div>
    </div>
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Swiper, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default defineComponent({
  name: "HomePortfolioSlider",
  data() {
    return {
      projects: [
        {
          title: "Space",
          subtitle: "space subtitle",
          image: require("@/assets/images/Space-exploration-thunbail-project.webp"),
          link: "#",
        },
        {
          title: "Space",
          subtitle: "space subtitle",
          image: require("@/assets/images/BONPAIN-thumbail-project.webp"),
          link: "#",
        },
        {
          title: "Space",
          subtitle: "space subtitle",
          image: require("@/assets/images/Space-exploration-thunbail-project.webp"),
          link: "#",
        },
        {
          title: "Space",
          subtitle: "space subtitle",
          image: require("@/assets/images/Space-exploration-thunbail-project.webp"),
          link: "#",
        },
      ],
    };
  },
  mounted() {
    new Swiper(".swiper", {
      modules: [Navigation],
      slidesPerView: 2,
      speed: 800,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
});
</script>
<style lang="scss" scoped>
.portfolio-slider .swiper-wrapper:hover a {
  @apply opacity-40;
}

a:hover {
  opacity: 1 !important;
}
</style>
