import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) // 路由

const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function (require) {
    resolve(require(`views/${name}${index ? '/index' : ''}.vue`))
  })
}

var routes = [
  {
    name: 'exam-list',
    path: '/exam-list',
    component: resolve => {
      lazyLoading(resolve, 'exam')
    }
  }, {
    name: 'exam',
    path: '/exam/:id',
    component: resolve => {
      lazyLoading(resolve, 'exam/detail', false)
    }
  }, {
    path: '*',
    redirect: '/exam-list'
  }
]

var router = new Router({
  routes
})

module.exports = router
