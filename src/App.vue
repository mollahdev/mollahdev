<template>
  <HeaderNavigation />
  <router-view />
  <PageFooter />
  <BackToTop />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderNavigation from "@/components/HeaderNavigation.vue";
import PageFooter from "@/components/PageFooter.vue";
import BackToTop from "./components/BackToTop.vue";
export default defineComponent({
  name: "App",
  components: {
    HeaderNavigation,
    PageFooter,
    BackToTop,
  },
});
</script>
<style lang="scss">
body {
  @apply bg-black font-primary text-base text-[#c3eed7] overflow-x-hidden;
}
</style>
