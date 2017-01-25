<template>
  <div class="exam">
    <ol>
      <question v-for="(question, index) in exam.question" :question="question" :index="index" ref="question"></question>
    </ol>

    <h2>结果</h2>
    总共 {{res.total}} <br>
    答对 {{res.right}} <br>
    答错 {{res.total - res.right}} <br>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import Question from 'components/question/index'
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
      answers: [],
      res: {
        total: 0,
        right: 0
      }
    }
  },
  mounted () {
    this.exam = allExam[`${examId}Exam`]
  },
  methods: {
    submit () {
      this.answers = this.getAnswers()
      var questionTypes = this.exam.question.map(question => {
        return question.type
      })
      var rightAnswers = this.exam.question.map(question => {
        return question.answer
      })
      this.res = {
        total: this.exam.question.length,
        right: this.caculateRightNum(this.answers, rightAnswers, questionTypes)
      }
    },
    getAnswers () {
      return this.$children.map(item => {
        return item.getValue()
      })
    },
    caculateRightNum (inputAnswers, rightAnswers, types) {
      var isRight = this.isRight
      var rightNum
      rightNum = rightAnswers.reduce((prev, curr, index) => {
        if (isRight(inputAnswers[index], curr, types[index])) {
          prev++
        }
        return prev
      }, 0)

      return rightNum
    },
    isRight (inputAnswer, rightAnswer, type) {
      if (!inputAnswer) {
        return false
      }
      var isRight = true
      if (!Array.isArray(rightAnswer)) {
        rightAnswer = [rightAnswer]
      }

      if (!Array.isArray(inputAnswer)) {
        inputAnswer = [inputAnswer]
      }

      if (['select', 'multiSelect'].indexOf(type) !== -1) {
        inputAnswer = inputAnswer.sort((a, b) => {
          return a - b
        }).map(item => {
          return 'ABCDEFGHI'.charAt(item)
        })
      }

      rightAnswer.forEach((answer, index) => {
        if (!isRight) {
          return
        }
        if (typeof answer !== 'function') {
          /* eslint-disable eqeqeq */ /* 避免类型转化出新的问题 */
          if (answer != inputAnswer[index]) {
            isRight = false
          }
        } else {
          isRight = answer(inputAnswer[index])
        }
      })

      return isRight
    }
  }
}
</script>


