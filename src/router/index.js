import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage";
import SignUp from "../components/Auth/SignUp";

const routes = [
  { path: "/", name: "sign-up", component: SignUp },
  { path: "/home", name: "home", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
