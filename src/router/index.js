import {createRouter, createWebHistory} from 'vue-router'  
// import Vue from "vue";
// import VueRouter from "vue-router";
import HomePage from "../views/HomePage";
import SignUp from "../components/Auth/SignUp";


const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/sign-up", name: "sign-up", component:SignUp  },
];

const router=createRouter({
    history: createWebHistory(""),
    routes
})

export default router;




