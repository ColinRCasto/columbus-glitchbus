import Vue from "vue";
import axios from "axios"
import VueAxios from "vue-axios"
import LoadScript from "vue-plugin-load-script"

import App from "./App.vue";

const api = axios.create({
  baseURL: 'https://horaro.org/-/api/v1/events/cbusglitchbus/schedules/schedule1',
  headers: {
    'Accept': 'application/json; version=1.0',
    'Content-Type': 'application/json'
  }
})

Vue.config.productionTip = false;
Vue.use(VueAxios, api)
Vue.use(LoadScript)

Vue.filter("prettyMono", value => {
  let newStr = value.replace(/o/g, "0");
  newStr = newStr.replace(/m/g, "M");
  newStr = newStr.replace(/a/g, "A");
  return newStr;
});

new Vue({
  render: h => h(App)
}).$mount("#app");
