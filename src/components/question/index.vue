<template>
  <li :class="['question', 'question--' + index]" >
    <h3 v-if="question.type !== 'text'" class="question__title">{{question.describe}}</h3>
    <h3 v-else  v-html="getFillTextContent(question)" class="question__title"></h3>
    <div v-if="['select', 'multiSelect'].indexOf(question.type) !== -1">
      <label v-for="(option, index) in question.option" class="">
        <input type="radio" :value="index" :name="'answer-' + index" v-if="question.type==='select'" v-model="value">
        <input type="checkbox" :value="index" :name="'answer-' + index" v-if="question.type==='multiSelect'" v-model="value">
        {{option}}
      </label>
    </div>
    <div>用户的答案: {{value}}</div>
  </li>
</template>

<script>
import $ from 'jquery'
export default {
  props: {
    question: {},
    index: 0
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    getFillTextContent (data) {
      var describe = data.describe
      return describe.replace(/%input/g, () => {
        return `<input type="text" class="input">`
      })
    },
    getValue () {
      return this.value
    }
  },
  mounted () {
    var vm = this
    if (['multiSelect', 'text'].indexOf(this.question.type) !== -1) {
      this.value = []
    }

    if (this.question.type === 'text') {
      $(`.question--${this.index} .input`).change(function () {
        var index = $(this).index()
        vm.$set(vm.value, index, this.value)
      })
    }
  }
}
</script>

<style>
.exam{
}
</style>
