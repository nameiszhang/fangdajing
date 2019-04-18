import React, { Component } from 'react'

export default class shopType extends Component {
  render() {
    let {shopType,call} = this.props;
    return (
      <div>
          {
              shopType.map((el,i)=><span key={el.id} onClick={()=>{
                call(el.id)
              }} style={{margin:10}}>{el.title}</span>)
          }
      </div>
    )
  }
}
