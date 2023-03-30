<template>
  <section class="bg-[#222222] overflow-hidden">
    <SkillMarquee />
    <div class="container mx-auto py-10 md:py-20 px-4">
      <div class="grid md:grid-cols-[1fr_3fr]">
        <div>
          <p class="font-light text-sm sm:text-base">REALISATIONS</p>
        </div>
        <div>
          <h2
            data-aos-duration="800"
            data-aos="fade-right"
            class="font-light text-2xl sm:text-3xl md:text-5xl py-3 text-[#e7faec] uppercase leading-[1.2]"
          >
            <strong class="font-bold">PROJETS</strong> — Apps/<br />
            WEBSITE DESIGN
          </h2>
          <p
            data-aos-duration="600"
            data-aos="fade-right"
            class="text-white font-light text-[13px] max-w-xl leading-6"
          >
            Designing unique and bespoke web designs that capture attention.
            Creation of innovative, intuitive and immersive interfaces. Trendy
            and creative branding and visual identity.
          </p>
          <div data-aos-duration="400" data-aos="fade-right">
            <router-link
              class="inline-block text-[13px] sm:text-sm sm:font-semibold border-solid border border-[#c3eed7] hover:bg-[#c3eed7] hover:text-[#222] rounded-full pt-2.5 py-2 px-5 sm:pt-3.5 sm:pb-3 sm:px-8 mt-5 transition-colors duration-300"
              to="/portfolio"
              >All My Projects</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import SkillMarquee from "@/components/SkillMarquee.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomePortfolio",
  components: {
    SkillMarquee,
  },
});
</script>
