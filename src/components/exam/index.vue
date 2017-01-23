<template>
  <div class="exam">
    <ol>
      <question v-for="(question, index) in exam.question" :question="question" :index="index" ref="question"></question>
    </ol>

    答案信息<br>
    <ol>
      <li v-for="answer in answers">
        {{answer}}
      </li>
    </ol>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import Question from '../question/index'
import htmlExam from 'exams/html'
// System.import(`exams/{examId}`).then(function (m) {
//   console.log(m, examId)
// })

var examId = 'html'
var allExam = {
  htmlExam
}

export default {
  components: {
    Question
  },
  data () {
    return {
      exam: {},
      answers: []
    }
  },
  mounted () {
    this.exam = allExam[`${examId}Exam`]
    this.$refs
  },
  methods: {
    submit () {
      this.answers = this.getAnswers()
    },
    getAnswers () {
      return this.$children.map(item => {
        return item.getValue()
      })
    }
  }
}
</script>


