import React, { Component } from 'react'
import LeftImg from './leftBagImg'
import LeftTable from './leftBottom'

export default class left extends Component {
    state = {
        imgobject:{BagImgUrl:'https://gd3.alicdn.com/imgextra/i3/3624976691/O1CN019bUS331zIWao5OfsC_!!3624976691.jpg'}
    }
  render() {
      let {list,fn} = this.props;
      let {imgobject} = this.state;
    return (
      <div className="left">
            <LeftImg imgobject={imgobject} fn={fn}/>
            <LeftTable list={list} callback={(imgobject)=>{
                this.setState({imgobject})
            }}/>
      </div>
    )
  }
}
