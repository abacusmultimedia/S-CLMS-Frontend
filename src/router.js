import { createRouter, createWebHistory } from "vue-router";
import RegisterProduct from "./components/Products/RegisterProduct.vue";
import LicenseGeneration from "./components/License/LicenseGeneration.vue";
import ProductGrid from "./components/Products/ProductGrid.vue";
import ProductActivation from "./components/Activation/ProductActivation.vue";
import LogIn from "./components/Auth/LogIn.vue";
import LicenseGrid from "./components/License/LicenseGrid.vue";
import MyLicenses from "./components/License/MyLicenses.vue";

const routes = [
  { path: "/", component: RegisterProduct },
  { path: "/Login", component: LogIn },
  { path: "/LicenseGeneration", component: LicenseGeneration },
  { path: "/RegisterProduct", component: RegisterProduct },
  { path: "/ProductActivation", component: ProductActivation },
  { path: "/ProductGrid", component: ProductGrid },
  { path: "/LicenseGrid", component: LicenseGrid },
  { path: "/MyLicenses", component: MyLicenses },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
