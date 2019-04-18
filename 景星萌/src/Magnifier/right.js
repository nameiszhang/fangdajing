import React, { Component } from 'react'

export default class right extends Component {
    
  render() {
    let {objectImg,left,top} = this.props;
    return (
      <div id="right">
           <img style={{position:'absolute',top:top*-2,left:left*-2}} src={objectImg.BagImgUrl} alt=""/>
      </div>
    )
  }
}
