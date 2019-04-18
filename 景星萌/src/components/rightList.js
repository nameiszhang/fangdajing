import React, { Component } from 'react'

export default class RightList extends Component {
  render() {
    let array = this.props.right;
    return (
      <div>
            {
              array.map(el =><span key={el.id}>{el.title}</span>)
            }
      </div>
    )
  }
}
