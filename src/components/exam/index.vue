<template>
  <div class="exam">
    <ol>
      <li v-for="(item, quesIndex) in question">
        <h3>{{item.describe}}{{answers['answer-' + quesIndex]}}</h3>
        <div v-if="item.type === 'select'">
          <label v-for="(option, index) in item.option" class="">
            <input type="radio" v-model="answers['answer-' + quesIndex]" :value="index" :name="'answer-' + quesIndex">
            {{option}}
          </label>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
// var examId = 'html'
import exam from 'exams/html'
// console.log(exam)
// System.import(`exams/{examId}`).then(function (m) {
//   console.log(m, examId)
// })
export default {
  data () {
    return {
      question: [],
      answers: {
      }
    }
  },
  mounted () {
    this.question = exam.question
    var self = this
    this.question.forEach((item, index) => {
      self.$set(self.answers, `answer-${index}`, '')
    })
    console.log(this.answers)
  }
}
</script>

<style>
.exam{
  text-align: left;
}
</style>
