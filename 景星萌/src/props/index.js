import React, { Component } from 'react'
import Prent from './prent'
import Context from '../utels/index'
export default class index extends Component {
  state = {
    index:0
  }
  render() {
    console.log(Context)
    let {index} = this.state;
    return (
      <div>
          父组件
          <Context.Provider value={index}>
              <Prent />
          </Context.Provider>
      </div>
    )
  }
}
