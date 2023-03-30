<template>
  <section class="bg-[#2c2c2c] py-16 md:py-20">
    <div class="container mx-auto grid md:grid-cols-3 px-4 gap-7">
      <div>
        <p class="text-white font-light uppercase">
          <strong class="font-bold">AWARDS</strong> — PRIX ET RECOMPENSES
        </p>
      </div>
      <div class="col-span-2 grid grid-cols-2 gap-3 md:gap-x-10 md:gap-y-1">
        <a
          target="_blank"
          :href="item.link"
          :key="index"
          data-aos-duration="600"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
          class="text-[12px] sm:text-sm hover:underline transition-all duration-200 underline-offset-2 decoration-white decoration-[0.3px]"
          v-for="(item, index) in list"
        >
          {{ item.name }}
          <span class="text-white font-light">— {{ item.desc }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageTop",
  data() {
    return {
      list: [
        {
          name: "Awwwards",
          desc: "Membre du jury design depuis 2019",
          link: "#",
        },
        {
          name: "Awwwards",
          desc: "Membre du jury design depuis 2019",
          link: "#",
        },
        {
          name: "Awwwards",
          desc: "Membre du jury design depuis 2019",
          link: "#",
        },
        {
          name: "Awwwards",
          desc: "Membre du jury design depuis 2019",
          link: "#",
        },
        {
          name: "Awwwards",
          desc: "Membre du jury design depuis 2019",
          link: "#",
        },
        {
          name: "Awwwards",
          desc: "Membre du jury design depuis 2019",
          link: "#",
        },
      ],
    };
  },
});
</script>
