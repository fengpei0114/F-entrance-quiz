import React, { Component } from 'react';
import './App.scss';
import GroupList from '../GroupList/GroupList'
import UserList from '../UserList/UserList'
import { getUserList, getGroupList } from '../../Utils/request';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: [],
      group: [],
    }
    this.getData();
  }

  getData = () => getUserList().then(data=>{
    this.setState({
      mytext: data
    })
    })

  sep_group = () => getGroupList().then(data=>{
    this.setState({
      group: data
    })
  })
  
  render() {
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
