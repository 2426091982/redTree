import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import "@/style/iconfont.css";
  
Vue.config.productionTip = false;

import {
  Button,
  Select,
  Container,
  Header,
  Main,
  Footer,
  Row,
  Col,
  Drawer,
  Carousel,
  CarouselItem,
  Divider,
  Tabs,
  TabPane,
  Slider
} from "element-ui";

Vue.use(Slider);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Divider);
Vue.use(Button);
Vue.use(Select);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Row);
Vue.use(Col);
Vue.use(Drawer);
Vue.use(Carousel);
Vue.use(CarouselItem);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
