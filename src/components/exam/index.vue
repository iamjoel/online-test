<template>
  <div class="exam">
    <ol>
      <question v-for="(question, index) in exam.question" :question="question" :index="index"></question>
    </ol>
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
  }
}
</script>


