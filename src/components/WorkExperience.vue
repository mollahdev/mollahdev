<template>
  <section class="case-study bg-[#efefef] py-20 px-3 text-[#323232]">
    <div class="container mx-auto text-center">
      <div class="border brder-y border-x-0 border-solid border-[#cccccc] py-5">
        <p
          data-aos-duration="900"
          data-aos="fade-up"
          class="text-lg uppercase font-light opacity-80"
        >
          Work Experience
        </p>
        <h2
          data-aos-duration="800"
          data-aos="fade-up"
          class="uppercase text-5xl mt-2 font-light"
        >
          <strong class="font-bold">Companies</strong> — Work / Contribution
        </h2>
      </div>
      <div
        data-aos-duration="800"
        data-aos="fade-up"
        class="flex items-center justify-center gap-[100px] py-12"
      >
        <a
          target="_blank"
          :href="company.link"
          class="flex items-center gap-2 text-2xl uppercase"
          :key="index"
          v-for="(company, index) in companies"
        >
          <img
            :src="company.image"
            alt="company"
            :width="company.width"
            :height="company.height"
            loading="lazy"
            draggable="false"
          />
        </a>
      </div>
      <CaseStudySlider />
      <p
        data-aos-duration="1200"
        data-aos="fade-in"
        class="max-w-3xl mx-auto text-sm"
      >
        "Design Lab" is a collection of my graphic research or more original
        projects. My ambition has always been to continue to evolve, to surpass
        myself and to learn by creating new visual concepts.
      </p>
      <div data-aos="fade-up">
        <router-link
          class="inline-block text-sm font-semibold border-solid border border-[#323232] hover:bg-[#323232] hover:text-white rounded-full pt-3.5 pb-3 px-8 mt-5 transition-colors duration-300"
          to="/portfolio"
          >All Case Study</router-link
        >
      </div>
    </div>
    <div
      class="container mx-auto pt-20 border-t mt-20 border-solid border-[#cccccc]"
    >
      <div class="grid grid-cols-[1fr_3fr]">
        <div>
          <p class="text-base uppercase">Experience</p>
        </div>
        <div>
          <h2
            data-aos-duration="800"
            data-aos="fade-right"
            class="font-light text-5xl text-[#323232] uppercase leading-[1.2]"
          >
            <strong class="font-bold">SERVICES</strong> — MORE THAN 5 <br />
            YEARS OF EXPERIENCE
          </h2>
          <div class="pt-10 grid grid-cols-3 gap-10">
            <div :key="index" v-for="(info, index) in workInfo">
              <h2
                data-aos="fade-up"
                class="font-semibold text-lg pb-1 text-[#323232]"
              >
                {{ info.title }}
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                class="text-sm leading-6 text-[#525252]"
              >
                {{ info.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sed
    minima consequatur placeat expedita molestiae corrupti aliquam laborum.
    Distinctio doloremque ducimus doloribus corporis, excepturi, error modi est
    rem cum magni consequuntur, aliquam quidem consequatur dolores alias ea
    dignissimos? Blanditiis vitae officiis exercitationem numquam eaque
    architecto? Consequatur, ipsam eligendi? Delectus inventore rerum labore
    expedita accusamus tempora, molestias maiores necessitatibus a distinctio
    optio soluta eius non dolore, laboriosam et sequi odio! Incidunt ipsa
    quidem, ut ullam, magni laudantium nam adipisci maxime nostrum eveniet
    corporis temporibus enim dolorem quibusdam veritatis ab accusamus tempora.
    Recusandae molestias officia quos ipsa reiciendis, repudiandae velit ullam
    doloribus.
  </h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CaseStudySlider from "@/components/CaseStudySlider.vue";
export default defineComponent({
  name: "WorkExperience",
  components: {
    CaseStudySlider,
  },
  data() {
    return {
      companies: [
        {
          image: require("@/assets/images/creative-it.png"),
          link: "https://www.creativeitinstitute.com/",
          width: 173,
          height: 52,
        },
        {
          image: require("@/assets/images/xpeedstudio-logo.svg"),
          link: "https://xpeedstudio.com/",
          width: 250,
          height: 52,
        },
        {
          image: require("@/assets/images/poptin-logo.png"),
          link: "https://www.poptin.com/",
          width: 200,
          height: 52,
        },
      ],
      workInfo: [
        {
          title: "UI/UX — WEB DESIGN",
          desc: "Custom web design design to set you apart from the competition. Creation of innovative and intuitive UI/UX interfaces with a unique design and impactful visuals.",
        },
        {
          title: "VISUAL IDENTITY — LOGO",
          desc: "Construction of a relevant and effective brand image to promote your company or your project. Realization of professional logo adapted to your image",
        },
        {
          title: "GRAPHICS",
          desc: "Graphic design of all types of elements to strengthen your digital presence. Formatting of communication support for printing.",
        },
      ],
    };
  },
});
</script>
