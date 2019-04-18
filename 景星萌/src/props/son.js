import React, { Component } from 'react'
import Context from '../utels/index'
export default class son extends Component {
  render() {
    return (
      <div>
        <Context.Consumer>
            {
              value=>{
                return <span>{value}</span>
              }
            }
        </Context.Consumer>
      </div>
    )
  }
}
