import React, { Component } from 'react'

export default class leftBagImg extends Component {
    state = {
        imgBlock: false,
        top:0,
        left:0
    }
    render() {
        let { imgobject,fn} = this.props;
        let { imgBlock,top,left} = this.state;
        // console.log(fn)
        return (
            <div className='leftImg' 
            onMouseEnter={(e) => {
                this.setState({ imgBlock: true })
                fn(imgobject)
            }}
            ref="widthOff"
                onMouseMove = {(e)=>{
                    let width = this.refs.widthOff.offsetWidth;
                    let lefts = this.refs.widthOff.offsetLeft;
                    let tops = this.refs.widthOff.offsetTop;
                    let left = e.clientX-100-lefts;
                    let top = e.clientY-100-tops;
                    if(left < 0){
                        left=0
                    }
                    if(top <0){
                        top=0;
                    }
                    if(left > width/2){
                        left =  width/2
                    }

                    if(top > width/2){
                        top =  width/2
                    }
                    fn(imgobject,left,top)
                    // console.log(x,y)
                    this.setState({left,top})
                }}
                onMouseLeave={() => {
                    this.setState({ imgBlock: false })
                    fn({})
                }}>

                <img src={imgobject.BagImgUrl} alt="" />
                <div id="drag" style={{ width: 200, height: 200, position: "absolute", top: top, left: left, background: "rgba(0,0,0,.3)", cursor:"move",display: imgBlock === false ? 'none' : "block" }}></div>
            </div>
        )
    }
}
