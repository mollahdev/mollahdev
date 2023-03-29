<template>
  <HomeBanner />
  <HomePortfolio />
  <HomePortfolioSlider />
  <WorkExperience />
  <FooterTop />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeBanner from "@/components/HomeBanner.vue";
import HomePortfolio from "@/components/HomePortfolio.vue";
import HomePortfolioSlider from "@/components/HomePortfolioSlider.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import FooterTop from "@/components/FooterTop.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    HomeBanner,
    HomePortfolio,
    HomePortfolioSlider,
    WorkExperience,
    FooterTop,
  },
});
</script>
