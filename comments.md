### 完成度：


__Details:__



### 测试：


__Details:__



### 知识点：


__Details:__
+ \+ 能够提取共用组件
- \- 不建议在constructor的时候去获取数据修改state
- \- 组件划分不够合理，分组的header按业务逻辑应该和group相关内容一起，参考组件划分GroupList，StudentList
- \- 标签使用不合适，<p> 标签表示一个段落
- \- async使用不正确，这里不需要加async，里面返回的就是一个Promise
- \- url设计不满足restful
- \- 最后一个then没有必要

### 工程实践：


__Details:__
+ \+ 有提取常量
+ \+ 把数据请求提取到单独的service
- \- 变量命名不合适
- \- 方法命名不合适
- \- 代码没有格式化，没有fix eslint
- \- 组件命名不合适，这个组件跟list有什么关系，就是一个学员而已

### 综合：


__Details:__



