<template>
  <div>
    <label><input v-model="answer" type="radio" value="1" :disabled="isAnswered">1: 全然</label>
    <label><input v-model="answer" type="radio" value="2" :disabled="isAnswered">2: あんまり</label>
    <label><input v-model="answer" type="radio" value="3" :disabled="isAnswered">3: ぼちぼち</label>
    <label><input v-model="answer" type="radio" value="4" :disabled="isAnswered">4: まずまず</label>
    <label><input v-model="answer" type="radio" value="5" :disabled="isAnswered">5: どちらかと言えば</label>
    <button v-if="!isAnswered" @click="decide">決定</button>
  </div>
</template>

<script>
export default {
  props: [
    "selectedAnswer"
  ],
  data() {
    return {
      answer: this.selectedAnswer || 3,
    }
  },
  computed: {
    isAnswered() {
      return this.selectedAnswer !== null
    }
  },
  methods: {
    decide() {
      this.$emit("decide", this.answer)
    }
  }
}
</script>