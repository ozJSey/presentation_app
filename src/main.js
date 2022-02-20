import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import subjects from "./assets/presentation";

const routes = subjects.map((subject) => {
  return {
    path: `${Object.keys(subject)}`,
    component: () => import("./components/PresentationPage.vue"),
  };
});
const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    {
      path: "/",
      component: () => import("./components/Home.vue"),
    },
    {
      path: "/endPage",
      component: () => import("./components/EndPage.vue"),
    },
  ],
});

createApp(App).use(router).mount("#app");
