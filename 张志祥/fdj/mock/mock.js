import Mock from 'mockjs'

const data=[{
    img:'/img/1.webp'
}, {
    img: '/img/2.webp'
}, {
    img: '/img/3.jpg'
}]
Mock.mock('/data',()=>{
    return {
        code:1,
        data
    }
})