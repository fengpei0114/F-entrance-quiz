import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: [],
      group: [{
        id:1,
        users:[
          {
            id:1,
            name:"成吉思汗"
          },
          {
            id:2,
            name:"鲁班七号"
          },{
            id:3,
            name:"太乙真人"
          }
        ]
      },{
        id:2,
        users:[
          {
            id:4,
            name:"钟无艳"
          },
          {
            id:5,
            name:"花木兰"
          },{
            id:6,
            name:"雅典娜"
          }
        ]
      },{
        id:3,
        users:[
          {
            id:7,
            name:"芈月"
          },
          {
            id:8,
            name:"刘禅"
          }
        ]
      }]
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

  render() {
    return (
      <>
      <div className = "spa_div">
        <h2 className = "spa_title">
          分组列表
        </h2>
        <button className="spa_button">分组学员</button>
        
      </div>
        {
          this.state.group.map(key => {
            return (
              <div className = "group_div">
                <div className = "group_title"><p>{key.id}组</p></div>
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
