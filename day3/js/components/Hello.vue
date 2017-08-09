<template>
  <div class="msg">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "test"
    }
  }
}
</script>

<style scoped>
.msg {
  color: red;
}
</style>