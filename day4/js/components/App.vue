<template>
  <div>
    {{ count }} : Count2 {{ count2 }}
    <button @click="increment">+1</button>
    <button @click="asyncIncrement">Async +1</button>
  </div>
</template>

<style scoped>
</style>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from "vuex"

export default {
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count2"]),
  },
  methods: {
    ...mapMutations(["increment"]),
    ...mapActions(["asyncIncrement"]),
  }
}
</script>
