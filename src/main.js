import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import "@/assets/css/style.css";
import router from "./router";
import store from "./store";
import { registerModules } from "./register-modules";
import productsModule from "./modules/products";

registerModules({
  products: productsModule,
});

const app = createApp(App).use(router).use(store).use(Antd);

app.mount("#app");
