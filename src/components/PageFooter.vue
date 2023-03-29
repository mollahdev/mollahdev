<template>
  <footer class="bg-[#222222]">
    <SkillMarquee />
    <div class="container px-4 flex justify-between mx-auto pt-10 pb-10">
      <div>
        <h2
          data-aos-duration="800"
          data-aos="fade-right"
          class="font-light text-2xl text-[#e7faec] uppercase leading-[1.4]"
        >
          <strong class="font-bold">ashraf Mollah</strong> — GRAPHISTE /<br />
          WEB DESIGNER FREELANCE —<br />
          LIEGE / BELGIQUE
        </h2>
        <div data-aos-duration="400" data-aos="fade-right">
          <router-link
            class="inline-block uppercase text-sm font-semibold border-solid border border-[#c3eed7] hover:bg-[#c3eed7] hover:text-[#222] rounded-full pt-3.5 pb-3 px-8 mt-5 transition-colors duration-300"
            to="/portfolio"
            >Send an Email</router-link
          >
        </div>
      </div>
      <div>
        <h2 class="text-white font-light text-sm">FOLLOW ME</h2>
        <div class="flex items-center gap-3 py-3">
          <a
            class="text-white/80 transition-colors duration-200 hover:text-white/100"
            title="facebook"
            href="#"
            target="_blank"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            class="text-white/80 transition-colors duration-200 hover:text-white/100"
            title="linkedin"
            href="#"
            target="_blank"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            class="text-white/80 transition-colors duration-200 hover:text-white/100"
            title="github"
            href="#"
            target="_blank"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <p
        class="text-white px-4 text-[12px] border-t-[.3px] border-opacity-40 border-solid border-t-[#ccc] font-light py-8 text-opacity-80"
      >
        Website made in Belgium with ♥ by Samuel Scalzo — © Scalzodesign / 2023
        / All rights reserved.
        <router-link class="text-white text-opacity-100 underline" to="#"
          >Privacy Policy</router-link
        >
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillMarquee from "@/components/SkillMarquee.vue";
export default defineComponent({
  name: "PageFooter",
  components: { SkillMarquee },
});
</script>
