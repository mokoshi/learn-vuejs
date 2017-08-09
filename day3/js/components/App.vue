<template>
  <div>
    <div v-for="(q, i) in questions">
      {{ q.title }}
      <answer-form
        :selected-answer="q.answer"
        @decide="ans => q.answer = ans"
      ></answer-form>
    </div>
    <div>
      {{ completedAnswers }} 件回答済み
    </div>
    <div v-if="isCompleted">
      <button @click="sendAnswers">送信</button>
    </div>
  </div>
</template>

<script>
import AnswerForm from "./AnswerForm.vue"

export default {
  components: {
    AnswerForm,
  },
  data() {
    return {
      questions: [
        { title: "最近いい感じですか？", answer: null },
        { title: "最近楽しいですか？", answer: null },
        { title: "最近いいことありましたか？", answer: 5 },
        { title: "イカ好きですか？", answer: null },
      ],
    }
  },
  computed: {
    completedAnswers() {
      return this.questions.filter(i => i.answer !== null).length
    },
    isCompleted() {
      return this.completedAnswers === this.questions.length
    }
  },
  methods: {
    sendAnswers() {
      alert("ありがとう")
    }
  }
}
</script>