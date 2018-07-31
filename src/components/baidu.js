import React, { Component } from 'react'
import Item from './item'

class Baidu extends Component {
  
  allchangeb=(e)=>{
    this.props.allchange(e.target.checked)
  }
  render() {
    let html=this.props.list.map(item=>{
      return <Item key={item.id} 
      {...item}  list={this.props.list} onechange={this.props.onechange}/>
     
    })
    let checked=this.props.list.every((item) => item.checked);
    return (
      <div className="baidu">
        <ul className="list list-head">
          <li>
            <div>
              {/*点击全选，所有的数据checked都为true*/}
              <input type="checkbox" checked={checked} onClick={this.allchangeb} />全选
						</div>
            <span>歌单</span>
            <span>歌手</span>
            <span>专辑</span>
          </li>
        </ul>
        <ul className="list list-body">
          {
            html
          }
        </ul>
        <div className="select">
          <span className="selectAll">

            <span>统计：</span>
          </span>
          <div className="others">
            <span><em></em>歌手有：3位</span>
            <span><em></em>专辑有5张</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Baidu;