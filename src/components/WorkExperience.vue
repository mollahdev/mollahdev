<template>
  <section class="case-study bg-[#efefef] py-20 px-3 text-[#323232]">
    <div class="container mx-auto text-center">
      <div class="border brder-y border-x-0 border-solid border-[#cccccc] py-5">
        <p class="text-lg uppercase font-light opacity-80">EXPLORATIONS</p>
        <h2 class="uppercase text-5xl mt-2 font-light">
          <strong class="font-bold">Companies</strong> — Work / Case study
        </h2>
      </div>
      <div class="flex items-center justify-center gap-[100px] py-12">
        <a
          target="_blank"
          href="https://www.creativeitinstitute.com/"
          class="flex items-center gap-2 text-2xl uppercase"
        >
          <img
            src="@/assets/images/creative-it.png"
            alt="creative-it"
            width="173"
            height="52"
            loading="lazy"
            draggable="false"
          />
        </a>
        <a
          target="_blank"
          href="https://xpeedstudio.com/"
          class="flex items-center gap-2 text-2xl uppercase"
        >
          <img
            src="@/assets/images/xpeedstudio-logo.svg"
            alt="xpeedstudio"
            width="250"
            height="52"
            loading="lazy"
            draggable="false"
          />
        </a>
        <a
          target="_blank"
          href="https://www.poptin.com/"
          class="flex items-center gap-2 text-2xl uppercase"
        >
          <img
            src="@/assets/images/poptin-logo.png"
            alt="poptin"
            width="200"
            height="52"
            loading="lazy"
            draggable="false"
          />
        </a>
      </div>
      <CaseStudySlider />
      <p class="max-w-3xl mx-auto text-sm">
        "Design Lab" est une collection de mes recherches graphiques ou projets
        plus originaux. Mon ambition a toujours été de continuer à évoluer, à me
        dépasser et à apprendre en créant de nouveaux concepts visuels.
      </p>
      <router-link
        class="inline-block text-sm font-semibold border-solid border border-[#323232] hover:bg-[#323232] hover:text-white rounded-full pt-3.5 pb-3 px-8 mt-5 transition-colors duration-300"
        to="/portfolio"
        >All Case Study</router-link
      >
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CaseStudySlider from "@/components/CaseStudySlider.vue";
export default defineComponent({
  name: "WorkExperience",
  components: {
    CaseStudySlider,
  },
});
</script>
