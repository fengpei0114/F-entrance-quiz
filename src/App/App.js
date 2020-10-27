import Axios from 'axios';
import React, { Component } from 'react';
import './App.scss';
import getUser from './request'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        mytext: []
    }
}
getData(){
    //修改请求头
    let myHeaders = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain'
    });
    fetch('http://localhost:8080/hello',{
        method:'GET',
        headers: myHeaders,
        mode: 'cors',
        //转或称字符串格式
    }).then(res=>res.json()).then(
        data=>{
            console.log(data);
            // eslint-disable-next-line
            data.map((key)=>{
                this.setState({
                    mytext: [...this.state.mytext, key]
                })
            })
        }
    )
}
//React周期函数，防止死循环,在组建被渲染前调用
componentWillMount(){
    this.getData();
}

  render() {
    return (
      <React.Fragment>
        <ul>
            {
              this.state.mytext.map((key, index)=>{
              return <li key={index}>{key.name}</li>
              })
            }
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
