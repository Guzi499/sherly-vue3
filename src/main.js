/*
 * @Author: lihaoyu
 * @Date: 2022-03-28 23:41:35
 * @LastEditTime: 2022-04-01 23:10:54
 * @LastEditors: lihaoyu
 * @Description: 入口文件
 * @FilePath: /sherly-vue3/src/main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElIcons from "@element-plus/icons-vue";
import router from "./router/router";
import "./router/index"; // permission control

import "@/assets/style/sherly.scss";
import "@/assets/style/index.scss";

const app = createApp(App);

app.use(store);

app.use(ElementPlus);

for (const name in ElIcons) {
  app.component(name, ElIcons[name]);
}

app.use(router);

app.mount("#app");