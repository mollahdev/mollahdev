<template>
  <HomeBanner />
  <HomePortfolio />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeBanner from "@/components/HomeBanner.vue";
import HomePortfolio from "@/components/HomePortfolio.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    HomeBanner,
    HomePortfolio,
  },
});
</script>
