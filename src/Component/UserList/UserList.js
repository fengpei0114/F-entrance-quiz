import React from 'react';
import './UserList.scss'

// TODO GTB-知识点: + 能够提取共用组件
// TODO GTB-工程实践: - 组件命名不合适，这个组件跟list有什么关系，就是一个学员而已
function UserList(props) {
  // TODO GTB-知识点: - 标签使用不合适，<p> 标签表示一个段落
  return <p key={props.user.id} className="number_list">{props.user.id}. {props.user.name}  </p>
}
export default UserList;
