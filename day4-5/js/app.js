import Vue from "vue"
import App from "./components/App.vue"

import Vuex from "vuex"
Vue.use(Vuex)

import $ from "jquery"

const store = new Vuex.Store({
  state: {
    isLoading: false,
    results: [],
  },
  mutations: {
    setLoadingStatus (state, {status}) {
      state.isLoading = status
    },
    updateResults (state, {response}) {
      const titles = response[1]
      const descs = response[2]
      const urls = response[3]

      state.results = titles.map((title, i) => {
        return {
          title,
          description: descs[i],
          url: urls[i],
        }
      })
    }
  },
  actions: {
    async search ({commit}, keyword) {
      commit("setLoadingStatus", {status: true})

      const response = await $.ajax({
        url: "http://en.wikipedia.org/w/api.php",
        dataType: "jsonp",
        data: {
          action: "opensearch",
          format: "json",
          search: keyword
        }
      })

      commit("updateResults", {response})
      commit("setLoadingStatus", {status: false})
    }
  },
})

const vm = new Vue({
  el: "#app",
  render: h => h(App),
  store: store,
})

