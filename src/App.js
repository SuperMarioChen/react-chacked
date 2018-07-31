import React from 'react';
import './style/baidu.css'
import Baidu from './components/baidu'

let data = [
  {
    id: 123,
    songName: '泡沫',
    singerName: '邓紫棋',
    zhuangji: 10,
    checked: true
  },
  {
    id: 5677,
    songName: '东风破',
    singerName: '周杰伦',
    zhuangji: 1,
    checked: true
  }
]

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      list:data
    }
  }
  allchange=(bl)=>{
    this.state.list.forEach((item)=>{
      console.log(this.state.list)
        item.checked=bl//赋值操作 而不是设置属性
    })
    this.setState({
        list:this.state.list  //对象中的key 和value用：
      }
    )
  }
  onechange=(id)=>{
    let num=this.state.list.find((item)=>{
      return item.id===id
    })
    num.checked=!num.checked
    this.setState({
      list:this.state.list  //对象中的key 和value用：
      }
      
    )
  }

  
  render() {
    
    return (
      <div className="wrap" id="app">
      <Baidu list={this.state.list} allchange={this.allchange} onechange={this.onechange}/>
		  </div>
    )
  }
}

export default App;