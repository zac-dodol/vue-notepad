import { createRouter, createWebHistory } from "vue-router";
import AboutViewVue from "@/views/AboutView.vue";
import HomeViewVue from "@/views/HomeView.vue";
import StudyViewVue from "@/views/StudyView.vue";

const routes = [
  { path: "/", component: HomeViewVue },
  { path: "/about", component: AboutViewVue },
  { path: "/study", component: StudyViewVue },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
