import React, { Component } from 'react'
import {phoneFen,babelBot} from "./mock"

class TableTop extends Component {
  state = {
    index:0
  }
  render() {
    let {phoneFen} = this.props;
    let {index} = this.state;
    return (
      <div className="flexaa top">
          <div className="bottomEr">
            {
                
                phoneFen.map((el,i)=><span className="spanTop" key={i} style={{background:i===index?"#0893ff":"",color:i===index?"#fff":"#666"}} onMouseOver={()=>{
                  this.setState({index:i})
                }}>{el.title}</span>)
            }
            {
        
                setInterval(()=>{
                  // console.log(index)
                  index<=phoneFen.length-1?index+=1:index=0;
                  console.log(this.state.index)
                  this.setState({index})
                },5000)
            }
          </div>
          <TableCenter phoneFen={phoneFen[index]}/>
      </div>
    )
  }
}


function TableCenter(props){
  let {array} = props.phoneFen;
    return <div className="centerSa">
        {
          array.map((el,i) =><dl key={i}><dt><img src={el.imgUrl} alt=""/></dt><dd><p>{el.title}</p><p className="center">{el.price}</p></dd></dl>)
        }
    </div>
}

class TableBot extends Component {
  state = {
    index:100
  }
  render() {
    let {babelBot} = this.props;
    let {index} = this.state;
    return (
      <div className="top lunsort">
          {
            babelBot.map((el,i) =><dl key={i} className={i===index?"active":null} onMouseOver={()=>{
              this.setState({index:i})
            }} ><dd><p>{el.title}</p><p>{el.price}</p></dd><dt><img src={el.imgUrl} alt=""/></dt></dl>)
          }
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
          <TableTop phoneFen={phoneFen}/>
          <TableBot babelBot={babelBot}/>
      </div>
    )
  }
}
export default App;
