import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: []
    }
    this.getData();
  }

  getData = () => {
    const myHeaders = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    });
    fetch('http://localhost:8080/hello', {
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
    

      <h2>学员列表</h2>
      <div>
      {
            this.state.mytext.map((key, index) => {
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
