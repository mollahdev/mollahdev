<template>
  <nav class="fixed z-20 top-5 left-0 w-full px-3">
    <div
      data-aos="fade-down"
      data-aos-delay="400"
      class="container flex items-center px-10 py-4 justify-between mx-auto rounded-md bg-[#323232]"
    >
      <picture>
        <img
          src="@/assets/images/ashraf-white-logo.svg"
          width="25"
          height="28"
          alt="ashraf-mollah"
          loading="lazy"
        />
      </picture>
      <div
        class="hidden md:flex flex-wrap items-center gap-8 text-white text-[12px] uppercase"
      >
        <router-link
          class="inline-block transition-colors duration-300"
          :to="menu.to"
          :key="index"
          v-for="(menu, index) in menus"
          >{{ menu.label }}</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderNavigation",
  data() {
    return {
      menus: [
        {
          label: "Home",
          to: "/",
        },
        {
          label: "Portfolio",
          to: "/portfolio",
        },
        {
          label: "About",
          to: "/about",
        },
        {
          label: "Contact",
          to: "/contact",
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
.router-link-active {
  @apply text-[#c3eed7];
}
</style>
