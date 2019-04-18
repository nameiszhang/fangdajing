import React, { Component } from 'react';
import data from '../mock/data.json';
class Right extends Component {
    constructor(){
        super()
    }
    render() {
        
        return (
            <div className="right">
                <img src={data[this.props.ind].img} />
            </div>
        );
    }
}

export default Right;