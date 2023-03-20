<template>
  <nav class="absolute z-20 top-0 left-0 w-full">
    <h2>header component</h2>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderNavigation",
});
</script>
