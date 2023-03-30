<template>
  <!-- Slider main container -->
  <div
    class="swiper case-study-slider"
    data-aos-duration="800"
    data-aos="fade-in"
  >
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div
        class="swiper-slide"
        :key="index"
        v-for="(project, index) in projects"
      >
        <div class="inline-flex items-center justify-center">
          <img
            :src="project.image"
            alt="project-thumbnail"
            loading="lazy"
            width="900"
            height="768"
          />
        </div>
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="case-study-pagination swiper-pagination py-5"></div>
    <!-- If we need navigation buttons -->
    <div
      class="case-study-prev-btn left-0 absolute w-1/2 top-0 h-[calc(100%_-_50px)] sm:h-[calc(100%_-_110px)] z-10 cursor-pointer"
    ></div>
    <div
      class="case-study-next-btn right-0 absolute w-1/2 top-0 h-[calc(100%_-_50px)] sm:h-[calc(100%_-_110px)] z-10 cursor-pointer"
    ></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Swiper, { Navigation, Pagination } from "swiper";

export default defineComponent({
  name: "CaseStudySlider",
  data() {
    return {
      projects: [
        {
          image: require("@/assets/images/Scalzodesign-digital-designer.webp"),
          link: "#",
        },
        {
          image: require("@/assets/images/Portfolio-webdesign.webp"),
          link: "#",
        },
        {
          image: require("@/assets/images/Architecture-UI-design.webp"),
          link: "#",
        },
        {
          image: require("@/assets/images/Unknown-dribbble.webp"),
          link: "#",
        },
      ],
    };
  },
  mounted() {
    new Swiper(".case-study-slider", {
      modules: [Navigation, Pagination],
      speed: 600,
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: ".case-study-next-btn",
        prevEl: ".case-study-prev-btn",
      },
      pagination: {
        el: ".case-study-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  },
});
</script>
<style lang="scss">
.case-study-pagination .swiper-pagination-bullet {
  @apply w-8 h-8 inline-block mx-0.5 cursor-pointer;
  &::before {
    content: "";
    @apply w-8 h-0.5 inline-block bg-[#200]/30 transition-colors duration-300;
  }
}

.case-study-pagination .swiper-pagination-bullet-active:before {
  @apply bg-[#222];
}
</style>
