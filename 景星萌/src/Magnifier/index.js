import React, { Component } from 'react'
import Left from './left'
import Right from './right'
import list from './mock'
export default class index extends Component {
    state = {
        objectImg:{},
        left:0,
        top:0
    }
  render() {
      let {objectImg,left,top} = this.state;
    return (
      <div id="box">
          <Left list={list} fn={(id,left,top)=>{
              this.setState({objectImg:id,left,top})
          }}/>
          <Right objectImg={objectImg} left={left} top={top}/>
      </div>
    )
  }
}
