import React, { Component } from 'react'

class List extends Component {
    render() {
        let {data,changeInd}=this.props
        // console.log(data)
        return (
        <div className='list'>
        {
            data.map((item,key)=>(
                <img key={key} src={item.img} onMouseEnter={()=>{
                    changeInd(key)
                }}/>
            ))
        }
        </div>
        )
    }
}

export default List
