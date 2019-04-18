import Mock from "mockjs";
import RightList from "./RightList.json"
import LeftLst from "./LeftList.json"

Mock.mock("/api/leftList",{
    LeftLst,
})
Mock.mock("/api/rightlist",({body})=>{
    let {typeId} = JSON.parse(body)
    return RightList.filter(el =>el.typeId===typeId*1);
})