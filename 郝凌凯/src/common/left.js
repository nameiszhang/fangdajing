import React, { Component } from 'react';

class Left extends Component {
    constructor(props){
        super(props)
        this.state={
            i:0,
            mark:{
                left:0,
                top:0
            },
            show:false
        }
    }
    static defaultProps={
        imgStyle:{
            width: 250,
            height: 350
        },
        markStyle:{
            width: 100,
            height: 100,
        }
    }
    render() {
        let {i,mark,show}=this.state;
        let {data,imgStyle,markStyle}=this.props;

        return (
            <div className='left'>
            <div className='top' style={{...imgStyle}} onMouseEnter={this.mouseenter.bind(this)}
            onMouseLeave={this.mouseleave.bind(this)}
            onMouseMove={this.mousemove.bind(this)}
            ref='imgBox'
            >
                <img src={data[i].img} />
                <div className='mark' style={{...markStyle,left:mark.left,top:mark.top,
                display:show?'block':'none'
                }}></div>
            </div>
            <ol>
                {
                    this.props.data.map((item,index)=><li key={item.id} onClick={this.tab.bind(this,index)}><img src={item.img}/></li>)
                }
            </ol>
            </div> 
        );
    }
    tab(index){
        this.setState({
            i:index
        })
        this.props.src(index)
    }
    mouseenter(){
        this.setState({
            show:true
        })
    }
    mouseleave(){
        this.setState({
            show:false
        })
    }
    mousemove(e){
        let {markStyle:{width,height}}=this.props;
        let {offsetLeft,offsetTop}=this.refs.imgBox
        console.log(offsetLeft)  
        this.setState({
            mark:{
                left:e.clientX-offsetLeft-width/2,
                top:e.clientY-offsetTop-height/2
            }
        })      
    }
}

export default Left;

