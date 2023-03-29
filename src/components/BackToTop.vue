<template>
  <button
    data-aos-duration="600"
    data-aos="fade-up"
    @click="backToTop"
    class="fixed right-5 rounded-md bg-white w-10 h-10 border border-[#ccc] z-30 flex justify-center items-center text-black cursor-pointer bottom-16"
  >
    <svg
      x="0px"
      y="0px"
      width="28"
      height="30"
      viewBox="0 0 53 20"
      xml:space="preserve"
      fill="currentColor"
    >
      <g></g>
      <g>
        <polygon
          points="43.886,16.221 42.697,17.687 26.5,4.731 10.303,17.688 9.114,16.221 26.5,2.312 	"
        ></polygon>
      </g>
    </svg>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BackToTop",
  methods: {
    backToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
});
</script>
