<template>
  <ul class="exams ly" >
    <li class="exam ly__item" v-for="item in list">
      <img src="./images/html.png" :alt="item.name" class="exam__logo">
      <h2 class="exam__name">{{item.name}} <span v-if="item.isDisable">（开发中）</span>
      </h2>
      <router-link v-if="!item.isDisable" :to="{name: 'exam', params: {id: item.id}}">
        测试
      </router-link>
    </li>
  </ul>
</template>
<script>
  export default {
    data () {
      return {
        list: [
          {
            id: 'html',
            name: 'HTML',
            image: 'html'
          },
          {
            id: 'css-selector',
            name: 'CSS 常用选择器',
            isDisable: true
          },
          {
            id: 'css-layout',
            name: 'CSS 布局',
            isDisable: true
          },
          {
            id: 'js-grammar',
            name: 'JavaScript 基础语法',
            isDisable: true
          },
          {
            id: 'js-data-type',
            name: 'JavaScript 数据类型',
            isDisable: true
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .exams {
    padding: 0;
    flex-wrap: wrap;
  }
  .exam {
    width: 30%;
    margin-right: 5%;
    margin-bottom: 10px;
    list-style: none;
    &:nth-child(3n) {
      margin-right: 0;
    }
    &__logo {
      width: 100%;
      height: 170px;
    }
  }
  @media screen and (max-width: 380px) {
    .exam {
      margin-right: 0;
      width: 100%;
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
</style>
