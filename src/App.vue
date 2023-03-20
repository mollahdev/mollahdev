<template>
  <HeaderNavigation />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderNavigation from "@/components/HeaderNavigation.vue";
export default defineComponent({
  name: "App",
  components: { HeaderNavigation },
});
</script>
<style lang="scss">
body {
  @apply bg-black font-primary text-base text-[#c3eed7];
}
</style>
