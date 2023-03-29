import { createApp } from 'vue'
import App from './App.vue'
import IconBox from "./components/IconBox.vue";
import SidebarLink from "./components/Sidebarplugin/SidebarLink.vue";
import Sidebar from "./components/Sidebarplugin/SideBar.vue";
import ModalComponent from "./components/ModalComponent.vue";

import "./assets/theme/global.scss";
import router from "./router";

createApp(App)
  .component("icon-box", IconBox)
  .component("side-bar", Sidebar)
  .component("sidebar-link", SidebarLink)
  .component("modal", ModalComponent)
  .use(router)
  .mount("#app");
