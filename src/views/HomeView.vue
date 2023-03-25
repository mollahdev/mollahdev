<template>
  <HomeBanner />
  <HomePortfolio />
  <HomePortfolioSlider />
  <WorkExperience />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeBanner from "@/components/HomeBanner.vue";
import HomePortfolio from "@/components/HomePortfolio.vue";
import HomePortfolioSlider from "@/components/HomePortfolioSlider.vue";
import WorkExperience from "@/components/WorkExperience.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    HomeBanner,
    HomePortfolio,
    HomePortfolioSlider,
    WorkExperience,
  },
});
</script>
