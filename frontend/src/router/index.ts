import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChangePassword from "@/views/ChangePassword.vue";
import ChangePasswordNoCurrent from "@/views/ChangePasswordNoCurrent.vue";
import ApiTester from "@/views/ApiTester.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/change-password",
      name: "home",
      component: ChangePasswordNoCurrent,
    },
    {
      path: "/api-test",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import("../views/AboutView.vue"),
      component: ApiTester,
    },
  ],
});

export default router;
