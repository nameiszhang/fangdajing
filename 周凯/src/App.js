import React, { Component } from 'react';
import dataList from './mock/data.json';
import Left from './common/left'
import Right from './common/right'
import './App.css';

class App extends Component {
    state={
      index:0
    }
 
  render() {
    let {index}=this.state;
    return (
      <div className="App">
          <Left data={dataList} src={this.setSrc.bind(this)}/>
          <Right  index={index}/>
      </div>
    );
  }
  setSrc(i){
    this.setState({
      index:i
    })
  }
}

export default App;
