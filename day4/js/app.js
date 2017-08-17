import Vue from "vue"
import App from "./components/App.vue"

import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  getters: {
    count2 (state) {
      return state.count * 2
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    asyncIncrement ({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
})

const vm = new Vue({
  el: "#app",
  render: h => h(App),
  store: store,
})

