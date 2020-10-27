import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: [],
      group: [],
    }
    this.getData();
  }

  getData = () => {
    const myHeaders = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    });
    fetch('http://localhost:8080/getUserList', {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
    }).then(res => res.json()).then(
      data => {
        console.log(data);
        data.map((key) => {
          this.setState({
            mytext: [...this.state.mytext, key]
          })
        })
      }
    )
  }

  sep_group = () => {
    const myHeaders = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    });
    fetch('http://localhost:8080/grouplist', {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
    }).then(res => res.json()).then(
      data => {
        console.log(data);
        this.setState({
          group:[]
        })
        data.map((key) => {
          this.setState({
            group: [...this.state.group, key]
          })
        })
      }
    )
  }

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
              <div className = "group_div">
                <div className = "group_title"><p>{key.id + 1}组</p></div>
                <div className = "group_number">
                {
                  key.users.map(user => {
                    return (
                    <p className = "number_list">{user.id}. {user.name}</p>
                    )
                  })
                }
                </div>
              </div>
            )
          })
        }
      
      <h2>学员列表</h2>
      <div>
        {
          this.state.mytext.map(key => {
            return <p className="number_list">{key.id}. {key.name}  </p>
          })
        }
        <button className="add_number"> + 添加学员</button>
      </div>
      </>
    );
  }
}

export default App;
