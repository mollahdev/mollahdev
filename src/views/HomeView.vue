<template>
  <HomeBanner />
  <HomePortfolio />
  <HomePortfolioSlider />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeBanner from "@/components/HomeBanner.vue";
import HomePortfolio from "@/components/HomePortfolio.vue";
import HomePortfolioSlider from "@/components/HomePortfolioSlider.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    HomeBanner,
    HomePortfolio,
    HomePortfolioSlider,
  },
});
</script>
