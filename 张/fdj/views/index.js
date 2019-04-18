import React, { Component } from 'react'
import Small from './small'
import Big from './big'
import List from './list'
import axios from 'axios'
import '../mock/mock'
import '../css/style.css'

class Index extends Component {
    state={
        data:[],
        index:0,
        bigLeft:0,
        bigTop:0,
        dex:0,
        IsShow:false
    }
    componentDidMount(){
        axios.get('/data').then(res=>{
            this.setState({
                data:res.data.data
            })
        })
    }
    changeInd=(ind)=>{
        this.setState({
            index:ind
        })
    }
    changeShow = (IsShow) => {
        this.setState({
            IsShow
        })
    }
    bigMove = (bigLeft, bigTop,dex) => {
        this.setState({
            bigLeft:-bigLeft*dex,
            bigTop:-bigTop*dex,
        })
    }
    render() {
        let {
            data,
            index,
            bigLeft,
            bigTop,
            IsShow,
        } = this.state
        return (
        <div className='wrap'>
        {data[index] &&
            <div className='left'>
                <Small img={data[index]} bigMove={this.bigMove} changeShow={this.changeShow}/>
                <List changeInd={this.changeInd} data={data}/>
            </div> 
        }
        {data[index] && <Big img={data[index]} bigLeft={bigLeft} IsShow={IsShow} bigTop={bigTop}/>}
        </div>
        )
    }
}

export default Index
