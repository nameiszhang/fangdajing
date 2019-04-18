import React, { Component } from 'react'

export default class leftBottom extends Component {
    state = {
        index:0
    }
  render() {
      let {list,callback} = this.props;
      let {index} = this.state;
    return (
      <div className="table">
            <ul id="ulis">
                {
                    list.map((el,i)=><li key={el.id} className={index===i?"active":null} onMouseOver={()=>{
                        this.setState({index:i})
                        callback(list[i])
                    }}><img src={el.BigImgUrl} alt=""/></li>)
                }
            </ul>
      </div>
    )
  }
}
