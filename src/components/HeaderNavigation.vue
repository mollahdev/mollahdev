<template>
  <nav
    class="z-[60] fixed left-0 top-3 md:top-7 headroom w-full px-3"
    ref="headroom"
  >
    <div
      data-aos="fade-down"
      data-aos-delay="400"
      class="container flex items-center px-4 md:px-10 py-3 md:py-4 justify-between mx-auto rounded-md bg-[#323232]"
    >
      <router-link to="/">
        <picture>
          <img
            src="@/assets/images/ashraf-white-logo.svg"
            width="25"
            height="28"
            alt="ashraf-mollah"
            loading="lazy"
          />
        </picture>
      </router-link>
      <div
        class="hidden md:flex flex-wrap items-center gap-8 text-white text-[12px] uppercase"
      >
        <router-link
          @click="isActive = false"
          class="inline-block transition-colors select-none duration-300"
          :to="menu.to"
          :key="index"
          v-for="(menu, index) in menus"
          >{{ menu.label }}</router-link
        >
      </div>
      <div
        :class="{ hamburger: true, active: isActive }"
        @click="isActive = !isActive"
      >
        <span class="lines"></span>
      </div>
    </div>
  </nav>
  <div
    :class="{
      'opacity-100': isActive,
      'opacity-0': !isActive,
      'pointer-events-none': !isActive,
    }"
    class="overlay-menu z-50 bg-[#222222] fixed w-full h-screen transition-opacity duration-500"
  >
    <div
      class="absolute top-[40%] -translate-y-1/2 right-7 sm:right-[8vw] flex flex-col gap-8 sm:gap-12 text-right"
    >
      <router-link
        @click="isActive = false"
        class="inline-block text-3xl hover:text-white select-none sm:text-5xl uppercase font-semibold self-end transition-colors duration-300"
        :to="menu.to"
        :key="index"
        v-for="(menu, index) in menus"
        >{{ menu.label }}</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Headroom from "headroom.js";
export default defineComponent({
  name: "HeaderNavigation",
  watch: {
    isActive: {
      handler(value) {
        if (value) {
          this.disableScrolling();
        } else {
          this.enableScrolling();
        }
      },
    },
  },
  data() {
    return {
      isActive: false,
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
  methods: {
    preventDefault(e: Event) {
      e.preventDefault();
    },
    disableScrolling() {
      const x = window.scrollX;
      const y = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
      document.body.addEventListener("touchmove", this.preventDefault, {
        passive: false,
      });
    },

    enableScrolling() {
      window.onscroll = function () {
        //...
      };
      document.body.removeEventListener("touchmove", this.preventDefault);
    },
  },
  mounted() {
    const headroom = new Headroom(this.$refs.headroom);
    headroom.init();
    const mql = window.matchMedia("(max-width: 768px)");
    mql.addEventListener("change", (ev) => {
      if (!ev.matches) {
        this.isActive = false;
      }
    });
  },
});
</script>
<style lang="scss" scoped>
.router-link-active {
  @apply text-[#c3eed7];
}

.overlay-menu .router-link-active {
  @apply text-white;
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

  &.active {
    width: 24px;
    height: 24px !important;
  }

  &:not(.active):before {
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

  &:not(.active):hover .lines {
    &:before {
      @apply -top-0.5;
    }
    &:after {
      @apply -bottom-0.5;
    }
  }

  &.active .lines {
    &:before,
    &:after {
      @apply top-1/2;
    }

    &:before {
      transform: translateY(-50%) rotate(-45deg);
    }

    &:after {
      transform: translateY(-50%) rotate(45deg);
    }
  }
}
</style>
