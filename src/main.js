import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("prettyMono", value => {
  let newStr = value.replace(/o/g, "0");
  newStr = newStr.replace(/m/g, "M");
  newStr = newStr.replace(/a/g, "A");
  return newStr;
});

new Vue({
  render: h => h(App)
}).$mount("#app");
