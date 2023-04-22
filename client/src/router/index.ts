import { createRouter, createWebHistory } from "vue-router";

import MainRouter from "@/views/Main/router";
import HomeRouter from "@/views/Home/router";
import EventsRouter from "@/views/Events/router";
import EventDetailRouter from "@/views/EventDetail/router";
import HostDashboardRouter from "@/views/HostDashboard/router";
import EventFormRouter from "@/views/EventForm/router";
import EditEventRouter from "@/views/EditEvent/router";

const routes = [
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
  MainRouter,
  HomeRouter,
  ...EventsRouter,
  ...EventDetailRouter,
  ...HostDashboardRouter,
  ...EventFormRouter,
  ...EditEventRouter,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
