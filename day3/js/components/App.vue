<template>
  <div>
    App.vue
    <transition name="cool">
      <hello v-show="show"></hello>
    </transition>
    <button @click="show = !show">Toggle</button>
  </div>
</template>

<style scoped>
.cool-enter-active {
  transition: all 2s;
}
.cool-leave-active {
  transition: all 2s;
}
.cool-enter {
  opacity: 0;
  font-size: 10px;
  color: blue;
}
.cool-leave-to {
  opacity: 0;
  font-size: 40px;
  color: green;
}
</style>

<script>
import Hello from "./Hello.vue"

export default {
  data() {
    return {
      show: false,
    }
  },
  components: {
    Hello,
  }
}
</script>
