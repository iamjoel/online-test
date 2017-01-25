module.exports =  {
  isPass (res) {
    return res.wrong < 5
  },
  question: [
  {
    describe: '下面关于图片标签的 alt 属性的说法正确的是',
    type: 'select',
    option: ['111', '222', '33', '图片加载失败后的说明名字'],
    answer: 'D'
  },{
    describe: '下面哪些是 HTML 的标签?',
    type: 'multiSelect',
    option: ['a', 'image', 'strong', 'h1'],
    answer: ['A', 'B', 'D']
  },{
    describe: '请输入%input,xx%input',
    type: 'text',
    option: ['a', 'image', 'strong', 'h1'],
    answer: ['aa', function(input) {return input.indexOf('b') !== -1}]
  }]
}
