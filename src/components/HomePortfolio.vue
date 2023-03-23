<template>
  <section class="bg-[#222222] overflow-hidden">
    <div>
      <MarqueeText
        class="text-2xl font-light py-8 inline-block border-b border-dashed border-b-[#565656]"
      >
        ReactJs — VueJs — NextJs - Material UI — Gutenberg — TailwindCSS —
        WordPress — TypeScript — JavaScript — Jest — SCSS — Web Component —
        Redux — Elementor — GruntJS — WP Scripts — Gulp — HTML — CSS —
      </MarqueeText>
    </div>
    <div class="container mx-auto py-20">
      <div class="grid grid-cols-[1fr_3fr]">
        <div>
          <p class="font-light text-base">REALISATIONS</p>
        </div>
        <div>
          <h2
            ref="projectTitle"
            class="font-light text-5xl text-[#e7faec] leading-[1.2]"
          >
            <strong class="font-bold">PROJETS</strong> — BRANDING/<br />
            WEBSITE DESIGN
          </h2>
          <p
            ref="projectDescription"
            class="text-white font-light text-[13px] max-w-xl leading-6"
          >
            Designing unique and bespoke web designs that capture attention.
            Creation of innovative, intuitive and immersive interfaces. Trendy
            and creative branding and visual identity.
          </p>
          <div ref="projectButton">
            <router-link
              class="inline-block text-sm font-semibold border-solid border-2 border-[#c3eed7] hover:bg-[#c3eed7] hover:text-[#222] rounded-full pt-3.5 pb-3 px-8 mt-5 transition-colors duration-300"
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
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MarqueeText from "vue-marquee-text-component";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomePortfolio",
  components: {
    MarqueeText,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.$refs.projectTitle as HTMLElement, {
      duration: 1,
      opacity: 0,
      x: "-100px",
      scrollTrigger: {
        trigger: this.$refs.projectTitle as HTMLElement,
      },
    });
    gsap.from(this.$refs.projectDescription as HTMLElement, {
      duration: 1,
      opacity: 0,
      x: "-80px",
      delay: 0.3,
      scrollTrigger: {
        trigger: this.$refs.projectDescription as HTMLElement,
      },
    });
    gsap.from(this.$refs.projectButton as HTMLElement, {
      duration: 1,
      opacity: 0,
      x: "-60px",
      delay: 0.6,
      scrollTrigger: {
        trigger: this.$refs.projectButton as HTMLElement,
      },
    });
  },
});
</script>
