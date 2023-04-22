import { createRouter, createWebHistory } from "vue-router";

import HostDashboardRouter from "@/views/HostDashboard/router";
import EventFormRouter from "@/views/EventForm/router";
import EditEventRouter from "@/views/EditEvent/router";

const routes = [
  // Auth
  {
    path: "/auth",
    component: () => import("@/views/Auth/AuthLayout.vue"),
    children: [
      {
        path: "",
        name: "Auth",
        component: () => import("@/views/Auth/Auth.vue"),
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/Auth/Login.vue"),
      },
      {
        path: "signup",
        name: "Signup",
        component: () => import("@/views/Auth/Signup.vue"),
      },
    ],
  },
  // Main
  {
    path: "/",
    component: () => import("@/components/Layout.vue"),
    children: [
      {
        path: "",
        name: "Main",
        component: () => import("@/views/Main/Main.vue"),
      },
      {
        path: "/explore",
        name: "Explore",
        component: () => import("@/views/Main/Explore.vue"),
      },
      {
        path: "/wishlists",
        name: "Wishlists",
        component: () => import("@/views/Main/Wishlists.vue"),
      },
    ],
  },
  // Events
  {
    path: "/events",
    name: "/Events",
    component: () => import("@/views/Events/Events.vue"),
    children: [
      {
        path: ":id",
        name: "EventDetail",
        component: () => import("@/views/Events/EventDetail.vue"),
      },
    ],
  },
  // Home
  {
    path: "/home",
    component: () => import("@/views/Home/HomeLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home/Home.vue"),
      },
    ],
  },
  ...HostDashboardRouter,
  ...EventFormRouter,
  ...EditEventRouter,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
