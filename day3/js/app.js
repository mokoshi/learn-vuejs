import Vue from "vue"
import App from "./components/App.vue"

const vm = new Vue({
  el: "#app",
  render: h => h(App),
})
