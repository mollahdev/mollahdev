<template>
  <MarqueeText
    class="text-base w-full overflow-x-hidden sm:text-2xl font-light py-4 sm:py-6 md:py-8 inline-block border-b border-dashed border-b-[#565656]"
  >
    ReactJs — VueJs — NextJs - Material UI — Gutenberg — TailwindCSS — WordPress
    — TypeScript — JavaScript — Jest — SCSS — Web Component — Redux — Elementor
    — GruntJS — WP Scripts — Gulp — HTML — CSS —
  </MarqueeText>
</template>
<script lang="ts">
import MarqueeText from "vue-marquee-text-component";
import { defineComponent } from "vue";
export default defineComponent({
  name: "SkillMarquee",
  components: {
    MarqueeText,
  },
});
</script>
