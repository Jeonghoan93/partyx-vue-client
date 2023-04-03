import { createRouter, createWebHistory } from "vue-router";

import MainRouter from "@/views/Main/router";
import HomeRouter from "@/views/Home/router";
import AuthRouter from "@/views/Auth/router";
import EventsRouter from "@/views/Events/router";
import EventDetailRouter from "@/views/EventDetail/router";
import HostDashboardRouter from "@/views/HostDashboard/router";
import EventFormRouter from "@/views/EventForm/router";
import EditEventRouter from "@/views/EditEvent/router";

const routes = [
  AuthRouter,
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
