import React, { Component } from 'react'

class Small extends Component {
    state={
        left:0,
        top: 0,
        open:false
    }
    render() {
        let {left,top,open}=this.state
        let {img,changeShow}=this.props
        return (
        <div className='small' ref='small'
         onMouseEnter={()=>{
             this.setState({open:true})
         }}
         onMouseLeave={()=>{
             this.setState({open:false})             
         }}>
            {open && <span style={{left,top}} className='move'
             ref='span' onMouseDown={(e)=>{
                this.mouseDown(e)
             }}
             onMouseEnter={()=>{
                changeShow(true)
             }}
             onMouseLeave={()=>{
                changeShow(false)
             }}></span>}
            <img src={img.img}/>
        </div>
        )
    }
    mouseDown=(e)=>{
        let {clientX,clientY,target}=e
        let {offsetLeft,offsetTop}=target
        this.startX=clientX-offsetLeft;
        this.startY=clientY-offsetTop;
        this.maxX = this.refs.small.offsetWidth - this.refs.span.offsetWidth;
        this.maxY = this.refs.small.offsetHeight - this.refs.span.offsetHeight;
        document.addEventListener('mousemove',this.mouseMove)
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', this.mouseMove)
        })
    }
    mouseMove = (e) => {
        let left=e.clientX-this.startX
        let top=e.clientY-this.startY
        if(left<=0)left=0
        if(top<=0)top=0
        if (left >= this.maxX) left = this.maxX
        if (top >= this.maxY) top = this.maxY
        let dex=(this.refs.small.offsetWidth/this.refs.span.offsetWidth)
        this.setState({left,top})
        this.props.bigMove(left, top,dex)
    }
}

export default Small
