import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage";
import SignUp from "../components/Auth/SignUp";

const routes = [
  { path: "/sign-up", name: "sign-up", component: SignUp },
  { path: "/", name: "home", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

router.beforeEach(async (to) => {
  let isSignedUp = false;
  const data = JSON.parse(localStorage.getItem("userDetails"));
  if (data) isSignedUp = true;
  if (
    // make sure the user is authenticated
    !isSignedUp &&
    // ❗️ Avoid an infinite redirect
    to.name !== "sign-up"
  ) {
    // redirect the user to the login page
    return { name: "sign-up" };
  }
});

export default router;
