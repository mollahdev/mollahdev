<template>
  <section class="relative w-full h-screen">
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
        class="w-full h-full object-contain"
      >
        <source src="@/assets/videos/banner-video.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="absolute left-0 top-0 w-full h-full z-10 flex items-center">
      <div class="container px-3 mx-auto text-center">
        <p
          class="font-light text-lg sm:text-xl"
          data-aos="zoom-in"
          data-aos-delay="900"
        >
          Assalamu Alaikum, I'm
        </p>
        <h1
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-delay="1000"
          class="font-black text-[#e7faec] text-3xl md:text-7xl leading-[1.3] md:leading-[1.1] mt-3 uppercase"
        >
          Ashraf Mollah<span class="font-light">/</span> <br />
          Frontend Developer
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="900"
          class="text-white sm:text-lg max-w-5xl font-light mt-5 sm:mt-2 mx-auto"
        >
          <strong class="font-semibold">Md Ashraful Mollah</strong> — Working as
          a frontend developer since 2019, located in Rajbari, Bangladesh,
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
