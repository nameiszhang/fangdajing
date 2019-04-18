import React, { Component } from 'react';
import dataList from './mock/data.json';
import Left from './common/left'
import Right from './common/right'
import './App.css';

class App extends Component {
    state={
      ind:0
    }
 
  render() {
    let {ind}=this.state;
    return (
      <div className="App">
          <Left data={dataList} src={this.setSrc.bind(this)}/>
          <Right  ind={ind}/>
      </div>
    );
  }
  setSrc(i){
    this.setState({
      ind:i
    })
  }
}

export default App;
