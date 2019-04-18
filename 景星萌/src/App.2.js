import React, { Component } from 'react'
import {tableTop,tableCenter,tableLink} from "./mock"
class TableTop extends Component {
  static defaultProps = {
    tableTop: {
      title:"jd"
    }
  }
  render() {
    console.log(this.props)
    let {tableTop} = this.props;
    return (
      <div classNmae="tableTop">
          <h2>{tableTop.title}</h2>
          <dl style={{display:"flex"}}>
              <dt><img src={tableTop.imgurl} /></dt>
              <dd>{tableTop.content}</dd>
          </dl>
      </div>
    )
  }
}

 class TableCenter extends Component {
   state = {
      index:0
   }
  render() {
    let {tableCenter} = this.props;
    let {index} = this.state;
    return (
      <div classNmae="tableCenter">
          {
              tableCenter.map((item,i)=><span key={item.id} style={{padding:10,color:index===i?"red":"#000"}} onClick={()=>{
                this.setState({index:i})
              }}>{item.title}</span>)
          }
          <TableCont tableCont={tableCenter[index]}/>
      </div>
    )
  }
}
function TableCont(props){
  let tableCont = props.tableCont;
  console.log(tableCont)
    return <div classNmae="tableCont">
        <dl style={{display:"flex"}}>
            <dt><img src={tableCont.content.img} /></dt>
            <dd>{tableCont.content.cont}</dd>
        </dl>
    </div>
}

class TableLink extends Component {
  render() {
    console.log(this.props)
    let {tableLink} = this.props;
    return (
      <div style={{background:"pink",width:"430px"}} classNmae="tableLink">
          {
              tableLink.map((el,i) =><a href={el.link} key={i} style={{padding:10,textDecoration:"none",color:"#fff"}}>{el.title}</a>)
          }
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
          <TableTop tableTop={tableTop}/>
          <TableCenter tableCenter={tableCenter}/>
          <TableLink tableLink={tableLink}/>
      </div>
    )
  }
}

