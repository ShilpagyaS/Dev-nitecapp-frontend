import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useNavDetails = () => {
    const router = useRouter();
    const { nav } = router.query;
    const category = nav ? nav?.[0] : "";
    const subcategory = nav ? nav?.[1] : null;
    const productId= nav ? nav?.[2] :null; 
    return {category,subcategory,productId};
}

export default useNavDetails;