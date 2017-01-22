# 在线测试
## 一个题目的定义
```
descibe: '题目的描述', // 如果是填空题, 用 %input 做为填空的内容
type: 'select',// 题目类型。 select：单选，multiSelect: 多选，text: 填空，js: 输入 Javascript 代码
answer: 'A', // 答案。 单选：'A',多选 ['A', 'C'], 填空： 'xxx' 或 ['xxx1', 'xxx2'], js： 代码运行结果。也可以是一个函数做完返回结果。
point: 2, // 分值
```

