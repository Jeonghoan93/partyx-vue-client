import AppHome from "./App.vue";
import HomeLayout from "./layout/HomeLayout.vue";

const HomeRouter = {
  path: "/home",
  component: HomeLayout,
  children: [
    {
      path: "",
      name: "Home",
      component: AppHome,
    },
  ],
};

export default HomeRouter;
