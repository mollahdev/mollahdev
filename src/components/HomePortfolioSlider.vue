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
            alt="project-thumbnail"
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
    <div class="portfolio-prev-btn left-9">
      <svg viewBox="0 0 100 100" width="30">
        <path
          d="M95.849,46.323H14.1L40.364,20.15a4.166,4.166,0,0,0-5.9-5.881L1.076,47.537a4.162,4.162,0,0,0,0,5.891L34.462,86.7a4.166,4.166,0,0,0,5.9-5.881L14.1,54.642H95.849A4.159,4.159,0,1,0,95.849,46.323Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
    <div class="portfolio-next-btn right-9">
      <svg viewBox="0 0 100 100" width="30">
        <path
          d="M95.849,46.323H14.1L40.364,20.15a4.166,4.166,0,0,0-5.9-5.881L1.076,47.537a4.162,4.162,0,0,0,0,5.891L34.462,86.7a4.166,4.166,0,0,0,5.9-5.881L14.1,54.642H95.849A4.159,4.159,0,1,0,95.849,46.323Z"
          transform="translate(100, 100) rotate(180) "
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Swiper, { Navigation } from "swiper";

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
          image: require("@/assets/images/Neutron-thumbnail.webp"),
          link: "#",
        },
        {
          title: "Space",
          subtitle: "space subtitle",
          image: require("@/assets/images/Botchi-thunbail-project.webp"),
          link: "#",
        },
      ],
    };
  },
  mounted() {
    new Swiper(".portfolio-slider", {
      modules: [Navigation],
      slidesPerView: 2,
      speed: 600,
      loop: true,
      navigation: {
        nextEl: ".portfolio-next-btn",
        prevEl: ".portfolio-prev-btn",
      },
    });
  },
});
</script>
<style lang="scss" scoped>
.portfolio-slider .swiper-wrapper:hover a {
  @apply opacity-40;
}

.portfolio-next-btn,
.portfolio-prev-btn {
  @apply absolute top-1/2 -translate-y-1/2 z-10 text-white text-opacity-95 h-10 w-10 flex items-center justify-center cursor-pointer;
}

a:hover {
  opacity: 1 !important;
}
</style>
