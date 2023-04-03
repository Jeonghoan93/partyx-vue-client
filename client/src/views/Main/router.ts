import AppMain from "./AppMain.vue";
import MainLayout from "./layout/MainLayout.vue";
import Explore from "./views/Explore.vue";
import Wishlists from "./views/Wishlists.vue";

const MainRouter = {
  path: "/",
  component: MainLayout,
  children: [
    {
      path: "",
      name: "Main",
      component: AppMain,
    },
    {
      path: "/explore",
      name: "Explore",
      component: Explore,
    },
    {
      path: "/wishlists",
      name: "Wishlists",
      component: Wishlists,
    },
  ],
};

export default MainRouter;
