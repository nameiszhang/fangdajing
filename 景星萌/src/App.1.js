import React, { Component } from 'react';

class App extends Component{
  render(){
    // console.log(this.props);
    let {title} = this.props;
    return <div>
      {title}
    </div>
  }
}

export default App;
