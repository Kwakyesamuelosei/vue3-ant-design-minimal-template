const moduleRoute = {
  path: "/products",
  component: () => import("./Module.vue"),
  children: [
    {
      path: "",
      name: "ProductList",
      component: () => import("./views/Products.vue"),
    },
    {
      path: ":id",
      name: "ProductDetails",
      component: () => import("./views/ProductDetails.vue"),
    },
  ],
};

export default (router) => {
  router.addRoute(moduleRoute);
};
