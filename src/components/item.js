import React, { Component } from 'react'

class Item extends Component {
  
  checkedone=()=>{
    this.props.onechange(this.props.id)
  }

  render() {
    let { songName, singerName, zhuangji,checked } = this.props;
     
    return (
      <li className="checkedColor">
        <div><input type="checkbox" checked={checked} onClick={this.checkedone}/></div>
        <span>{songName}</span>
        <span>{singerName}</span>
        <span>{zhuangji}</span>
      </li>
    )
  }
}

export default Item;