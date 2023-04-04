import { useState, useEffect } from "react";

const useFilteredData = (productList, typechecking, defauttype, findname) => {
  const filtereddata = () => {
    let temp = [];
    
    if (typechecking) {
      const Alltypetemp = productList.map((i) => {

        const isTypePresentIndex = temp.findIndex(
          (t) => t.type === i?.[`${findname}`]
        );

        if (isTypePresentIndex > -1) {
          temp[isTypePresentIndex] = {
            type: i?.[`${findname}`],
            data: [...(temp[isTypePresentIndex]?.data || []), i],
          };
        } else {
          temp.push({ type: i?.[`${findname}`], data: [i] });
        }
      });
      
    } else {
      temp = [{ type: defauttype, data: productList }];
     
    }
    
    return temp
  };


   

  return  filtereddata();
};

export default useFilteredData;
