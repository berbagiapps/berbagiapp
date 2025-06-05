import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChangePassword from "@/views/ChangePassword.vue";
import ChangePasswordNoCurrent from "@/views/ChangePasswordNoCurrent.vue";
import ApiTester from "@/views/ApiTester.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/view/change-password",
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
    {
      path: "/:pathMatch(.*)*", // ✅ Catch-all route for 404
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
