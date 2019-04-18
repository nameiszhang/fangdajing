import React, { Component } from 'react'
import RightList from "./rightList"
import ShopType from "./shopType"
import axios from 'axios'
import "../mock/index"
export default class App extends Component {
    state = {
        shopType: [],
        index:0,
        right:[]
    }
    render() {
        
        let {shopType,right} = this.state
        return (
            <div id="app">
                <ShopType shopType={shopType} call={(index)=>{
                    this.app(index)
                }}/>
                <RightList right={right}/>
            </div>
        )
    }
    componentDidMount() {
        axios.get("/api/leftList").then(res =>{
            this.setState({shopType:res.data.LeftLst})
        })
        this.app(this.state.index)
    }
    app(i){
        axios.post("/api/rightlist",{
            typeId:i
        }).then(res =>{
            this.setState({right:res.data})
        })
    }
}

