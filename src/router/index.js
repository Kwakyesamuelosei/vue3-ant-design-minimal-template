import { createRouter, createWebHistory } from "vue-router";
import Overview from "../views/Overview.vue";

const routes = [
  {
    path: "/",
    redirect: "/overview",
  },
  {
    path: "/overview",
    name: "overview",
    component: Overview,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});

export default router;
