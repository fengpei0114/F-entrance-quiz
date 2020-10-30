import React, { Component } from 'react';
import './App.scss';
import GroupList from '../GroupList/GroupList'
import UserList from '../UserList/UserList'
import { getUserList, getGroupList } from '../../Utils/request';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO GTB-工程实践: - 变量命名不合适
      mytext: [],
      group: [],
    }
    // TODO GTB-知识点: - 不建议在constructor的时候去获取数据修改state
    this.getData();
  }

  getData = () => getUserList().then(data=>{
    this.setState({
      mytext: data
    })
    })

  // TODO GTB-工程实践: - 方法命名不合适
  sep_group = () => getGroupList().then(data=>{
    this.setState({
      group: data
    })
  })

  render() {
    // TODO GTB-知识点: - 组件划分不够合理，分组的header按业务逻辑应该和group相关内容一起，参考组件划分GroupList，StudentList
    return (
      <>
      <div className = "sep_div">
        <h2 className = "sep_title">
          分组列表
        </h2>
        <button className="sep_button" onClick={this.sep_group}>分组学员</button>
      </div>
        {
          this.state.group.map(key => {
            return (
              <GroupList key={key.id} group = {key}/>
            )
          })
        }

      <h2>学员列表</h2>
      <div>
        {
          this.state.mytext.map(key => {
            return (
              <UserList key = {key.id} user = {key} />
            )
          })
        }
        <button className="add_number"> + 添加学员</button>
      </div>
      </>
    );
  }
}

export default App;
// TODO GTB-工程实践: - 代码没有格式化，没有fix eslint
