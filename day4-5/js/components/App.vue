<template>
  <div>
    <form @submit.prevent="search(keyword)">
      <input v-model="keyword">
      <input type="submit" value="Search">
    </form>
    <div v-if="isLoading">Loading...</div>
    <div v-else v-for="result in results" class="result-item">
      <a :href="result.url">{{ result.title }}</a>
      <div class="description">({{ result.description }})</div>
    </div>
  </div>
</template>

<style scoped>
  .result-item {
    margin: 5px;
  }
  .description {
    font-size: 10px;
    color: #333;
  }
</style>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from "vuex"

export default {
  data() {
    return {
      keyword: "pokemon",
    }
  },
  computed: {
    ...mapState(["isLoading"]),
    ...mapState(["results"]),
  },
  methods: {
    ...mapActions(["search"]),
  }
}
</script>
