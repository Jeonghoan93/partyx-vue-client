import { createRouter, createWebHistory } from "vue-router";

import HostDashboardRouter from "@/views/HostDashboard/router";
import EventFormRouter from "@/views/EventForm/router";
import EditEventRouter from "@/views/EditEvent/router";

const routes = [
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
        path: "/popular",
        children: [
          {
            path: "",
            name: "Popular",
            component: () => import("@/views/Main/Popular.vue"),
          },
        ],
      },
      {
        path: "/clubs",
        children: [
          {
            path: "",
            name: "Clubs",
            component: () => import("@/views/Main/Clubs.vue"),
          },
        ],
      },
      {
        path: "/festivals",
        children: [
          {
            path: "",
            name: "Festivals",
            component: () => import("@/views/Main/Festivals.vue"),
          },
        ],
      },
      {
        path: "/house",
        children: [
          {
            path: "",
            name: "House",
            component: () => import("@/views/Main/House.vue"),
          },
        ],
      },
      {
        path: "/search",
        children: [
          {
            path: "",
            name: "Search",
            component: () => import("@/views/Main/Search.vue"),
          },
        ],
      },
    ],
  },
  // Auth
  {
    path: "/auth",
    component: () => import("@/views/Auth/AuthLayout.vue"),
    children: [
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
