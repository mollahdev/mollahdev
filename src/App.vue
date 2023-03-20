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
