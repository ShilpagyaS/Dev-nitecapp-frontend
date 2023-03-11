
import { useState, useEffect } from "react";


const useFilteredData = (productList,typechecking,defauttype) => {
    const [filtereddataList,setfiltereddata]=useState([])
    const filtereddata=()=>{
      let temp=[];
    
      if(typechecking){
        const Alltypetemp=productList.map((i)=>{
          const findname="category"  
          const isTypePresentIndex=temp.findIndex((t)=>t.type===i?.[`${findname}`])
            if(isTypePresentIndex>-1){
              temp[isTypePresentIndex]={type:i?.[`${findname}`],data:[...(temp[isTypePresentIndex]?.data|| []),i]}
            } else {
              temp.push({type:i.category,data:[i]})
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