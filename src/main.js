import Vue from "vue";
import App from "./components/App";

// Styles
import "./styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#root");
