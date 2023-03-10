import { emptyProductList } from "@/store/slices/product";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const useFilteredData = (productList,typechecking,defauttype) => {
    const [filtereddataList,setfiltereddata]=useState([])
    const dispatch=useDispatch()
    const filtereddata=()=>{
      let temp=[];
      if(typechecking){
        const Alltypetemp=productList.map((i)=>{
            const isTypePresentIndex=temp.findIndex((t)=>t.type===i.type)
            if(isTypePresentIndex>-1){
              temp[isTypePresentIndex]={type:i.type,data:[...(temp[isTypePresentIndex]?.data|| []),i]}
            } else {
              temp.push({type:i.type,data:[i]})
            }
            
            })
      } else {
        temp=[{type:defauttype,data:productList}]
      }
      
      setfiltereddata(temp)
    }
    useEffect(()=>{
      filtereddata()
   
    },[productList])

    return filtereddataList
}

export default useFilteredData;