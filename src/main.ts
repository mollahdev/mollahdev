import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import AOS from "aos";

import "aos/dist/aos.css";
import "swiper/css";
import "@/assets/scss/fonts.scss";
import "@/assets/scss/tailwind.scss";

createApp(App).use(store).use(router).mount("#app");
AOS.init();
