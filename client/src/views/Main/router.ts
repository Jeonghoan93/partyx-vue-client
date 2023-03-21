import AppMain from "./App.vue";
import MainLayout from "./layout/MainLayout.vue";

const MainRouter = {
  path: "/",
  component: MainLayout,
  children: [
    {
      path: "",
      name: "Main",
      component: AppMain,
    },
  ],
};

export default MainRouter;
