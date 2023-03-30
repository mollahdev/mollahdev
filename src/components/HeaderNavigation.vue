<template>
  <nav
    class="z-20 fixed left-0 top-3 md:top-7 headroom w-full px-3"
    ref="headroom"
  >
    <div
      data-aos="fade-down"
      data-aos-delay="400"
      class="container flex items-center px-4 md:px-10 py-3 md:py-4 justify-between mx-auto rounded-md bg-[#323232]"
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
      <div class="hamburger">
        <span class="lines"></span>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Headroom from "headroom.js";
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
  mounted() {
    const headroom = new Headroom(this.$refs.headroom);
    headroom.init();
  },
});
</script>
<style lang="scss" scoped>
.router-link-active {
  @apply text-[#c3eed7];
}

/**
 * Note: I have omitted any vendor-prefixes for clarity.
 * Adding them is left as an exercise for the reader.
 */
.headroom {
  will-change: transform;
  transition: transform 200ms linear;
}
.headroom--pinned {
  transform: translateY(0%);
}
.headroom--unpinned {
  transform: translateY(-150%);
}

.hamburger {
  @apply h-[14px] w-[24px] relative cursor-pointer inline-block md:hidden;

  &:before {
    content: "";
    @apply absolute left-0 w-full h-0.5 bg-inherit top-1/2 -translate-y-1/2 bg-[#f8f8f8];
  }

  .lines {
    @apply w-full block h-full cursor-pointer;

    &::before,
    &::after {
      content: "";
      @apply absolute left-0 w-full h-0.5 bg-inherit bg-[#f8f8f8] transition-all duration-300;
    }

    &:before {
      @apply top-0;
    }

    &:after {
      @apply bottom-0;
    }
  }

  &:hover .lines {
    &:before {
      @apply -top-0.5;
    }
    &:after {
      @apply -bottom-0.5;
    }
  }
}
</style>
