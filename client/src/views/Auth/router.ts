import AppAuth from "./App.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import AuthLayout from "./layout/AuthLayout.vue";

const AuthRouter = {
  path: "/auth",
  component: AuthLayout,
  children: [
    {
      path: "",
      name: "Auth",
      component: AppAuth,
    },
    {
      path: "login",
      name: "Login",
      component: Login,
    },
    {
      path: "signup",
      name: "Signup",
      component: Signup,
    },
  ],
};

export default AuthRouter;
