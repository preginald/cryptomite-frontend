import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/calculators/simple/",
    name: "simple-calculator",
    component: () => import("./components/calculators/SimpleCalculator.vue"),
  },
  {
    path: "/calculators/yield-farming-breakeven",
    name: "yield-farming-breakeven-calculator",
    component: () => import("./components/calculators/YieldFarmBreakeven.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
