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
    path: "/dashboard",
    alias: "/dashboard",
    name: "dashboard",
    component: () => import("./views/Dashboard/Home.vue"),
  },
  {
    path: "/dashboard/chain",
    alias: "/dashboard/chain",
    name: "chain",
    component: () => import("./views/Dashboard/Chain.vue"),
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
  {
    path: "/test",
    name: "test",
    component: () => import("./components/tests/Test.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
