<template>
  <section class="relative w-full h-[70vh] md:h-screen">
    <div
      class="w-full h-full absolute left-0 top-0 pointer-events-none overflow-hidden z-0"
    >
      <video
        data-autoplay="true"
        autoplay="true"
        webkit-playsinline=""
        playsinline="true"
        loop="true"
        muted="true"
        data-object-fit="cover"
        class="w-full h-full object-cover md:object-contain"
      >
        <source src="@/assets/videos/banner-video.mp4" type="video/mp4" />
      </video>
    </div>
    <div
      class="absolute left-0 pt-16 top-0 w-full h-full z-10 flex items-center"
    >
      <div class="container px-3 mx-auto text-center">
        <p
          class="font-light text-sm sm:text-xl"
          data-aos="zoom-in"
          data-aos-delay="900"
        >
          Assalamu Alaikum, I'm <span class="inline-block sm:hidden">a</span>
        </p>
        <h1
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-delay="1000"
          class="font-black text-[#e7faec] text-3xl md:text-6xl lg:text-7xl leading-[1.3] md:leading-[1.1] mt-3 uppercase"
        >
          <span class="hidden sm:inline-block">Ashraf Mollah</span
          ><span class="font-light hidden sm:inline-block">/</span>
          <br class="hidden sm:block" />
          Frontend Developer
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="900"
          class="text-white text-sm leading-6 sm:leading-[1.5] sm:text-lg max-w-5xl font-light mt-2 mx-auto"
        >
          <strong class="font-semibold">Md Ashraful Mollah</strong> — Working as
          a frontend dev since 2019, located in Rajbari, Bangladesh,
          specializing in the creation of modern/PWA/SPA/optimized web
          application using React.js, Vue.js, Gutenberg, Next.js, and more...
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeBanner",
});
</script>
