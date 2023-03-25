<template>
  <section class="bg-[#222222] overflow-hidden">
    <SkillMarquee />
    <div class="container mx-auto py-20">
      <div class="grid grid-cols-[1fr_3fr]">
        <div>
          <p class="font-light text-base">REALISATIONS</p>
        </div>
        <div>
          <h2
            data-aos-duration="800"
            data-aos="fade-right"
            class="font-light text-5xl text-[#e7faec] uppercase leading-[1.2]"
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
              class="inline-block text-sm font-semibold border-solid border border-[#c3eed7] hover:bg-[#c3eed7] hover:text-[#222] rounded-full pt-3.5 pb-3 px-8 mt-5 transition-colors duration-300"
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
