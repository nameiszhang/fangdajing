import React, { Component } from 'react'

class Big extends Component {
    state={
        left:0,
        top:0,
    }
    render() {
        let {
            img,
            bigLeft,
            bigTop,
            IsShow
        } = this.props
        // console.log(bigLeft, bigTop)
        return (
        <div>
            {IsShow && <div className='big'>
                <img style={{left:bigLeft,top:bigTop}} src={img.img}/>
            </div>}
        </div>
        
        )
    }
}

export default Big
