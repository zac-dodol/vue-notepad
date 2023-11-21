import { createRouter, createWebHistory } from "vue-router";
import AboutViewVue from "@/views/AboutView.vue";
import HomeViewVue from "@/views/HomeView.vue";

const routes = [
  { path: "/", component: HomeViewVue },
  { path: "/about", component: AboutViewVue },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
